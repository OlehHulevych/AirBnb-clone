namespace AirBnbApi.Dtos;

public class DescriptionDto
{
    public int Id { get; set; }
    public int Rooms { get; set; }
    public string Material { get; set; }
    public int Floors { get; set; }
    public bool Gas { get; set; }
    public bool Electricity { get; set; }
    public bool Internet { get; set; }
    public string OtherDetails { get; set; }
}