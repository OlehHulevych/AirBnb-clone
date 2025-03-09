using System.Collections;

namespace Airbnb_client.Models;

public class Estate
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int Price { get; set; }
    public string Type { get; set; }
    public List<String> photos = new List<String>();
    public int FavoritesId { get; set; }
    public List<FavoriteEstate> FavoritesLists = new List<FavoriteEstate>();
    public Adress Adress { get; set; }
    public Description Description { get; set; }
    public int UserId { get; set; }
    public User User { get; set; }

}