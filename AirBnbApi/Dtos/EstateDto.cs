using AirBnbApi.Models;
using Type = AirBnbApi.Models.Type;

namespace AirBnbApi.Dtos;

public class EstateDto
{
    
    public int Id { get; set; }
    public string Name { get; set; }
    public string Adress { get; set; }
    public List<String> Photos { get; set; }
    public Class Class { get; set; }
    public Type Type { get; set; }
    public DescriptionDto description { get; set; }
    
}


