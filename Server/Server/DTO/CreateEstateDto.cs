namespace Airbnb_client.DTO;

public class CreateEstateDto
{
    public string Name { get; set; }
    public int Price { get; set; }
    public string Type { get; set; }
    public List<String> photos { get; set; }
    public AddressDto Address { get; set; }
    public string userName { get; set; }
    public DescriptionDto Description { get; set; }
}

public class AddressDto
{
    public string country { get; set; }
    public string City { get; set; }
    public string District { get; set; }
    public string Street { get; set; }
    public int House{  get; set; }
}

public class DescriptionDto{
    public float Area { get; set; }
    public string country { get; set; }
    public string City { get; set; }
    public string District { get; set; }
    public string Street { get; set; }
    public int House{  get; set; }
}