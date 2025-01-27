namespace AirBnbApi.Models;

public class Description
{
    public int Id { get; set; }
    public int rooms { get; set; }
    public string material { get; set; }
    public int floors { get; set; }
    public bool gas { get; set; }
    public bool electicity { get; set; }
    public bool internet { get; set; }
    public string OtherDetails { get; set; }
    public int? EsateId { get; set; }
    public Estate? Estate { get; set; }
}