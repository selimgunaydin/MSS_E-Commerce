﻿using E_Commerce.Entities.Exceptions.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Commerce.Entities.Exceptions
{
    public class BrandBadRequestException : BadRequestException
    {
        public BrandBadRequestException(string message) : base(message)
        {
        }
    }
}
