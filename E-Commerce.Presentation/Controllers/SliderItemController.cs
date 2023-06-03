﻿using AutoMapper;
using E_Commerce.Business.Interfaces;
using E_Commerce.Business.Interfaces.Storage;
using E_Commerce.Business.Models;
using E_Commerce.Common.Enums;
using E_Commerce.Dtos.SliderItemsDtos;
using E_Commerce.Presentation.ActionFilters;
using E_Commerce.Presentation.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace E_Commerce.Presentation.Controllers
{
    [EnableCors("DefaultPolicy")]
    [ApiController]
    [Route("api/[controller]")]
    public class SliderItemController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly ISliderItemService _sliderItemService;
        private readonly IStorage _storage;

        public SliderItemController(ISliderItemService sliderItemService, IMapper mapper, IStorage storage)
        {
            _sliderItemService = sliderItemService;
            _mapper = mapper;
            _storage = storage;
        }

        [HttpGet]
        public async Task<IActionResult> GetSliderItems()
        {
            var response = await _sliderItemService.GetAllSliderItemAsync();
            return Ok(response);
        }

        [HttpGet("{sliderItemId}")]
        public async Task<IActionResult> GetSliderItemsByFilter([FromRoute] int sliderItemId)
        {
            var response = await _sliderItemService.GetByIdAsync(sliderItemId);
            return Ok(response.Data);
        }


        [HttpPost("create")]
        [ServiceFilter(typeof(ValidateFilterAttiribute<SliderItemCreateModel>))]
        public async Task<IActionResult> CreateSliderItem([FromForm] SliderItemCreateModel model)
        {
            var dto = _mapper.Map<SliderItemCreateDto>(model);
            var imageUrlGuid = Guid.NewGuid().ToString();
            dto.ImageUrl = imageUrlGuid + Path.GetExtension(model.File.FileName);

            var response = await _sliderItemService.CreateAsync(dto);
            if (response.ResponseType == ResponseType.Success)
                await _storage.UploadFile(imageUrlGuid, model.File);

            return StatusCode(201);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> deleteSliderItemById([FromRoute] int id)
        {
            await _sliderItemService.deleteSliderItemById(id);
            return Ok(201);
        }


        [HttpPut]
        public async Task<IActionResult> updateSliderItem([FromForm] SliderItemUpdateModel model)
        {
            await _sliderItemService.updateSliderItem(model);
            return StatusCode(201);
        }



    }
}
