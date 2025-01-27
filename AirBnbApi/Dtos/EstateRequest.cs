namespace AirBnbApi.Dtos;

public class EstateRequest
{
    
    public string Name { get; set; }
    public string Adress { get; set; }
    
    public List<String> Photos { get; set; }
    public int ClassId { get; set; }
    public int TypeId { get; set; }
    public DescriptionRequest description { get; set; }
    
}

public partial class DescriptionRequest
{
    
    public int Rooms { get; set; }
    public string Material { get; set; }
    public int Floors { get; set; }
    public bool Gas { get; set; }
    public bool Electricity { get; set; }
    public bool Internet { get; set; }
    public string OtherDetails { get; set; }
}