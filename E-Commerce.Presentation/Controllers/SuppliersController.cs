﻿using AutoMapper;
using E_Commerce.Business.Interfaces;
using E_Commerce.Business.Interfaces.Storage;
using E_Commerce.Dtos.ProductImageDtos;
using E_Commerce.Dtos.SupplierDtos;
using E_Commerce.Dtos.SupplierProductDtos;
using E_Commerce.Presentation.ActionFilters;
using E_Commerce.Presentation.Models;
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
    public class SuppliersController : ControllerBase
    {
        readonly ISupplierService _supplierService;
        readonly ISupplierProductService _supplierProductService;
        readonly IMapper _mapper;
        readonly IStorage _storage;

        public SuppliersController(ISupplierService supplierService, IMapper mapper, IStorage storage, ISupplierProductService supplierProductService)
        {
            _supplierService = supplierService;
            _mapper = mapper;
            _storage = storage;
            _supplierProductService = supplierProductService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllSupplier()
        {
            var data = await _supplierService.GetAllSupplierAsync();
            return Ok(data);
        }

        [HttpPost]
        [ServiceFilter(typeof(ValidateFilterAttiribute<SupplierCreateModel>))]
        public async Task<IActionResult> AddSupplier([FromForm] SupplierCreateModel model)
        {
            var mappedData = _mapper.Map<SupplierCreateDto>(model);
            var imageUrlGuid = Guid.NewGuid().ToString();

            mappedData.ImageUrl = imageUrlGuid + Path.GetExtension(model.File.FileName);

            await _storage.UploadFile(imageUrlGuid, model.File);
            await _supplierService.CreateSupplierAsync(mappedData);
            return StatusCode(201);
        }
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteSupplier([FromRoute] int id)
        {
            await _supplierService.RemoveSupplier(id);
            return NoContent();
        }

        [HttpGet("{supplierid:int}/products")]
        public async Task<IActionResult> GetProductsFromSupplierId([FromRoute] int supplierid)
        {
            var data = await _supplierProductService.GetAllProductInStockAsync(supplierid);
            return Ok(data);
        }


        [HttpPost("{supplierid:int}/products")]
        [ServiceFilter(typeof(ValidateFilterAttiribute<SupplierProductCreateModel>))]
        public async Task<IActionResult> AddSupplierProducts([FromForm] SupplierProductCreateModel model)
        {
            List<ProductImageCreateDto> productImageList = new List<ProductImageCreateDto>();
            var dto = _mapper.Map<SupplierProductCreateDto>(model);
            var supplierProductId = await _supplierProductService.CreateSupplierProduct(dto);

            foreach (var file in model.Files)
            {
                var imageUrlGuid = Guid.NewGuid().ToString();

                //dto.ImageUrl = imageUrlGuid + Path.GetExtension(file.FileName);
                await _storage.UploadFile(imageUrlGuid, file);

                productImageList.Add(new()
                {
                    ImageUrl = imageUrlGuid + Path.GetExtension(file.FileName),
                    SupplierProductId = supplierProductId
                });
            }
            await _supplierProductService.AddImageUrls(productImageList);
            return NoContent();
        }
        [HttpGet("products/{supplierproductid:int}")]
        // Eğer azure patlıyorsa ip adresini white list olarak ekle .
        public async Task<IActionResult> GetOneSupplierProductForSale([FromRoute] int supplierProductId)
        {
            return Ok(await _supplierProductService.GetCustomSupplierProductAsync(supplierProductId));
        }

    }
}
