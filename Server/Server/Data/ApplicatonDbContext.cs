using Airbnb_client.Models;
using Microsoft.EntityFrameworkCore;

namespace Airbnb_client.Data;

public class ApplicatonDbContext:DbContext
{
    public ApplicatonDbContext(DbContextOptions<ApplicatonDbContext> options) : base(options)
    {
        
    }
    
    public DbSet<User> Users { get; set; }
    public DbSet<Estate> Estates { get; set; }
    public DbSet<Description> Descriptions { get; set; }
    public DbSet<Adress> Adresses { get; set; }
    public DbSet<Favorites> Favorites { get; set; }
    public DbSet<FavoriteEstate> FavoriteEstates { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>()
            .HasMany(u => u.Estates)
            .WithOne(e => e.User)
            .HasForeignKey(e=>e.UserId);

        modelBuilder.Entity<User>()
            .HasMany(e => e.Estates)
            .WithOne(e => e.User)
            .HasForeignKey(e => e.UserId);

        modelBuilder.Entity<Estate>()
            .HasOne(e => e.Adress)
            .WithOne(a => a.Estate)
            .HasForeignKey<Adress>(a => a.EstateId);

        modelBuilder.Entity<Estate>()
            .HasOne(e => e.Description)
            .WithOne(d => d.Estate)
            .HasForeignKey<Description>(d => d.EstateId);

        modelBuilder.Entity<Favorites>()
            .HasOne(f => f.User)
            .WithOne(u => u.FavoriteList)
            .HasForeignKey<Favorites>(f => f.UserId);

        modelBuilder.Entity<FavoriteEstate>()
            .HasOne(fe => fe.Favorites)
            .WithMany(f => f.FavoriteEstateList)
            .HasForeignKey(fe => fe.FavoritesId);

        modelBuilder.Entity<FavoriteEstate>()
            .HasOne(fe => fe.Estate)
            .WithMany(e => e.FavoritesLists)
            .HasForeignKey(fe => fe.EstateId);


    }
}