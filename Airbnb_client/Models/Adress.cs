namespace Airbnb_client.Models;

public class Adress
{
    public int Id { get; set; }
    public int EstateId { get; set; }
    public Estate Estate { get; set; }
    public string country { get; set; }
    public string City { get; set; }
    public string District { get; set; }
    public string Street { get; set; }
    public int House{  get; set; }
}