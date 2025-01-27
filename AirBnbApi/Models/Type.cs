namespace AirBnbApi.Models;

public class Type
{
    public int Id { get; set; }
    public string name { get; set; }
    public List<Estate> Estates = new List<Estate>();
}