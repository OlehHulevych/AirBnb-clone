using AirBnbApi.Dtos;
using AirBnbApi.Models;

namespace AirBnbApi.Mappers;

public static class EstateMapper
{
    public static EstateDto ToEstateDto(this Estate estateModel)
    {
        return new EstateDto
        {
            Id = estateModel.Id,
            Name = estateModel.name,
            Adress = estateModel.adress,
            Photos = estateModel.Photos,
            Class = estateModel.Class,
            Type = estateModel.Type,
            description = estateModel.Description.ToDescriptionDto()
        };
    }
}