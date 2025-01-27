using AirBnbApi.Data;
using AirBnbApi.Dtos;
using AirBnbApi.Mappers;
using AirBnbApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;



namespace AirBnbApi.Controllers;
[Route("/api/estate")]
[ApiController]
public class EstateController:ControllerBase
{
    private readonly ApplicationDbContext _context;
    public EstateController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllEstates()
    {
        var estates = _context.Estates.Include(e => e.Description).Include(e=>e.Class).Include(e=>e.Type).AsQueryable();
        var estatesDto = estates.Select(e => e.ToEstateDto()).ToList();
        return Ok(estatesDto);

    }


    [HttpPost]
    public async Task<IActionResult> CreateEstate([FromBody]EstateRequest estateRequest)
    {
        try
        {
            if (estateRequest == null)
            {
                return BadRequest("there must be data");
            }

            var Estate = new Estate
            {
                name = estateRequest.Name,
                adress = estateRequest.Adress,
                Photos = estateRequest.Photos,
                ClassId = estateRequest.ClassId,
                TypeId = estateRequest.TypeId
            };

            var description = new Description
            {
                rooms = estateRequest.description.Rooms,
                material = estateRequest.description.Material,
                floors = estateRequest.description.Floors,
                gas = estateRequest.description.Gas,
                internet = estateRequest.description.Internet,
                electicity = estateRequest.description.Electricity,
                OtherDetails = estateRequest.description.OtherDetails
            };
            Estate.Description = description;
            await _context.Estates.AddAsync(Estate);
            await _context.Descriptions.AddAsync(description);
            await _context.SaveChangesAsync();
            return Ok("The estate was created");
        }
        catch (Exception e)
        {
            return BadRequest("Error " + e);
        }
        

    }

    [HttpPut]
    [Route("{id:int}")]
    public async Task<IActionResult> UpdateEstate([FromRoute] int id, [FromBody] UpdateEstateRequestDto updateDto)
    {
        var existingEstate = await _context.Estates.Include(estate => estate.Description).Include(estate=>estate.Class).Include(estate=>estate.Type).FirstOrDefaultAsync(x => x.Id == id);
        if (existingEstate == null)
        {
            return null;
        }

        existingEstate.name = updateDto.Name;
        existingEstate.adress = updateDto.Adress;
        existingEstate.Photos = updateDto.Photos;
        existingEstate.ClassId = updateDto.ClassId;
        existingEstate.TypeId = updateDto.TypeId;
        if (existingEstate.Description != null)
        {
            existingEstate.Description.rooms = updateDto.description.Rooms;
            existingEstate.Description.floors = updateDto.description.Floors;
            existingEstate.Description.electicity = updateDto.description.Electricity;
            existingEstate.Description.internet = updateDto.description.Internet;
            existingEstate.Description.material = updateDto.description.Material;
            existingEstate.Description.gas = updateDto.description.Gas;
            existingEstate.Description.OtherDetails = updateDto.description.OtherDetails;
        }

        await _context.SaveChangesAsync();
        return Ok("The estate was updated");
    }

    [HttpDelete]
    [Route("{id:int}")]
    public async Task<IActionResult> DeleteEstate([FromRoute] int id)
    {
        var estate = await _context.Estates.Include(e=>e.Description).Include(e=>e.Class).Include(e=>e.Type).FirstOrDefaultAsync(e => e.Id == id);
        if (estate == null)
        {
            return null;
        }

        _context.Estates.Remove(estate);
        _context.Descriptions.Remove(estate.Description);
        await _context.SaveChangesAsync();
        return Ok("The estate was deleted");
    }
}