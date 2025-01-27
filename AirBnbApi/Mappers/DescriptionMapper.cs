using AirBnbApi.Dtos;
using AirBnbApi.Models;

namespace AirBnbApi.Mappers;

public static class DescriptionMapper
{
    public static DescriptionDto ToDescriptionDto(this Description descriptionModel)
    {
        return new DescriptionDto
        {
            Id = descriptionModel.Id,
            Rooms = descriptionModel.rooms,
            Material = descriptionModel.material,
            Floors = descriptionModel.floors,
            Gas = descriptionModel.gas,
            Electricity = descriptionModel.electicity,
            Internet = descriptionModel.electicity,
            OtherDetails = descriptionModel.OtherDetails

        };
    }
}