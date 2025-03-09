namespace Airbnb_client.Models;

public class FavoriteEstate
{
    public int Id { get; set; }
    public int EstateId { get; set; }
    public Estate Estate { get; set; }

    public int FavoritesId { get; set; }
    public Favorites Favorites { get; set; }
}