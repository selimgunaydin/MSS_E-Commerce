﻿using E_Commerce.Business.Interfaces;
using E_Commerce.Entities.RequestFeatures;
using E_Commerce.Presentation.Helpers;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Commerce.Presentation.Controllers
{
    [EnableCors("DefaultPolicy")]
    [ApiController]
    [Route("api/[controller]")]
    public class SalesProductsController : ControllerBase
    {
        private readonly IProductInStockService _productInStockService;
        private readonly ISalesProductService _salesProductService;

        public SalesProductsController(IProductInStockService productInStockService, ISalesProductService salesProductService)
        {
            _productInStockService = productInStockService;
            _salesProductService = salesProductService;
        }

        //[HttpGet]
        //public async Task<IActionResult> Get([FromQuery] string category)
        //{
        //    var data = await _productInStockService.GetProductsAsync(category);
        //    return Ok(data);
        //}

        [HttpGet]
        public async Task<IActionResult> GetFromFilter([FromQuery] SalesProductRequestParameter parameter)
        {
            var data = await _salesProductService.GetProductFromParameter(parameter);
            HttpContext.Response.AppendMetada(data.MetaData);
            return Ok(data);
        }
    }
}
