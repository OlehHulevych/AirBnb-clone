namespace Airbnb_client.Models;

public class Description
{
    public int Id { get; set; }
    public float Area { get; set; }
    public int EstateId { get; set; }
    public Estate Estate { get; set; }
    public bool Internet { get; set; }
    public int Rooms { get; set; }
    public int Kitchen { get; set; }
    public bool insulation { get; set; }
    public bool allowPets { get; set; }
    public string LocationCity { get; set; }
    public string NearestBusStop { get; set; }
    public string NearestMetroStation { get; set; }
    public bool Parking { get; set; }
}