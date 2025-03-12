using System.Collections;

namespace Airbnb_client.Models;

public class User
{
    public string  Id { get; set; }
    public string Password { get; set; }
    public string Name { get; set; }
    public string City { get; set; }
    public string Role { get; set; }
    public List<Estate> Estates = new List<Estate>();
  
    public Favorites FavoriteList { get; set; }
}