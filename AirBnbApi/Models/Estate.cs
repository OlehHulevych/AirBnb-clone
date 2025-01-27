namespace AirBnbApi.Models;

public class Estate
{
    public int Id { get; set; }
    public string name { get; set; }
    public string adress { get; set; }

    public List<string> Photos { get; set; } = new List<string>();
    public Description? Description { get; set; }
    public Class? Class { get; set; }
    public int ClassId { get; set; }
    public Type Type { get; set; }
    public int TypeId { get; set; }



}