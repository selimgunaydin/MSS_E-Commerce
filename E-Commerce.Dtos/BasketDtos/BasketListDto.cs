﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Commerce.Dtos.BasketDtos
{
    public class BasketListDto
    {
        public int CustomerId { get; init; }

        public List<BasketItemListDto> BasketItems { get; init; }
    }
}
