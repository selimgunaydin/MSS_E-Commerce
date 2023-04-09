﻿using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Commerce.Business.Services
{
    public class RedisService 
    {
        readonly ConnectionMultiplexer connectionMultiplexer;
        readonly IDatabase _database;
        readonly IConfiguration _configuration;

        public RedisService(IConfiguration configuration)
        {
            var options = new ConfigurationOptions();
            //this.connectionMultiplexer = ConnectionMultiplexer.Connect(configuration.GetConnectionString("RedisConnection"));   
            this.connectionMultiplexer = ConnectionMultiplexer.Connect(configuration.GetConnectionString("RedisRemoteConnection"));
            
            _database = connectionMultiplexer.GetDatabase();
        }
        public void Add(string key, object value, int duration)
        {
            var result = JsonConvert.SerializeObject(value);
            _database.StringSet(key, result, TimeSpan.FromMinutes(duration));
        }
        public async Task<T> Get<T>(string key)
        {
            T value = JsonConvert.DeserializeObject<T>(await _database.StringGetAsync(key));
            return value;
        }
        public async Task<bool> Remove(string key)
        {
            return await _database.KeyDeleteAsync(key);
        }
    }
}
