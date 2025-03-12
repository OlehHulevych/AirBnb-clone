namespace Airbnb_client.Models;

public class Favorites
{
    public int Id { get; set; }
    public string UserId { get; set; }
    public User User { get; set; }
    public List<FavoriteEstate> FavoriteEstateList = new List<FavoriteEstate>();
}