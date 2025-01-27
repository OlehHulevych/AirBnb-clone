namespace AirBnbApi.Models;

public class Class
{
    public int Id { get; set; }
    public string name { get; set; }
    public List<Estate> Estates = new List<Estate>();
}