using System.Collections;

namespace Airbnb_client.Models;

public class User
{
    public int Id { get; set; }
    public string Password { get; set; }
    public string Name { get; set; }
    public string City { get; set; }
    public string Role { get; set; }
    public List<Estate> Estates = new List<Estate>();
    public int FavoritesId { get; set; }
    public Favorites FavoriteList { get; set; }
}