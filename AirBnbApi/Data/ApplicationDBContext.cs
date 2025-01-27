using AirBnbApi.Models;
 using Microsoft.EntityFrameworkCore;
 using Type = AirBnbApi.Models.Type;


 namespace AirBnbApi.Data;
 
 public class ApplicationDbContext:DbContext{
     public readonly IConfiguration Configuration;
 
     public ApplicationDbContext(IConfiguration configuration)
     {
         Configuration = configuration;
     }
 
     protected override void OnConfiguring(DbContextOptionsBuilder options)
     {
         options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection"));
     }

     protected override void OnModelCreating(ModelBuilder modelBuilder)
     {
         base.OnModelCreating(modelBuilder);
         modelBuilder.Entity<Estate>()
             .HasOne(u=>u.Description)
             .WithOne(d=>d.Estate)
             .HasForeignKey<Description>(d=>d.EsateId);
         modelBuilder.Entity<Class>()
             .HasMany<Estate>(c => c.Estates)
             .WithOne(e => e.Class)
             .HasForeignKey(e => e.ClassId);
         modelBuilder.Entity<Type>()
             .HasMany<Estate>(t => t.Estates)
             .WithOne(e => e.Type)
             .HasForeignKey(e => e.TypeId);
     }
     
     public DbSet<User> Users { get; set; }
     public DbSet<Estate> Estates { get; set; }
     public DbSet<Type> Types { get; set; }
     public DbSet <Class> Classes { get; set; }
     public DbSet<Description> Descriptions { get; set; }
     
     
 }