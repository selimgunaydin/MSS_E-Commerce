﻿using E_Commerce.Common;
using E_Commerce.Dtos.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Commerce.Dtos.SupplierAddingProductDtos
{
    public record SupplierAddingProductCreateDto : ICreateDto
    {
        public int SupplierProductId { get; init; }
        public double UnitPrice { get; init; }
        public int Amount { get; init; }
        public DateTime Date { get; init; } = DateTime.UtcNow.AddHours(UtcTimeConstant.TurkeyUTC);
    }
}
