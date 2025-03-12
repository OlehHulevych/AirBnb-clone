using Airbnb_client.Data;
using Airbnb_client.DTO;
using Airbnb_client.Models;
using Airbnb_client.Services;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;

namespace Airbnb_client.Controllers;

[ApiController]
[Route("api/user")]
public class UserController:ControllerBase
{

    private readonly JwtService _jwtService;
    private readonly ApplicatonDbContext _context;

    public UserController(JwtService jwtService, ApplicatonDbContext context)
    {
        _jwtService = jwtService;
        _context = context;
    }

    [HttpPost("register")]
    public IActionResult Register([FromBody] RegisterRequestDto request)
    {
        try
        {
            if (_context.Users.Any(u => u.Name == request.Name))
            {
                return BadRequest("User data is required.");
            }



            var user = new User()
            {
                Id = Guid.NewGuid().ToString(),
                Name = request.Name,
                Password = _jwtService.HashPassword(request.Password),
                FavoriteList = new Favorites(),
                City = request.City,
                Role = request.Role,

            };

            _context.Users.Add(user);
            _context.SaveChanges();
            string token = _jwtService.GenerateToken(user);
            var ResponseObjectUser = new ResponseObject()
            {
                meesage = "The user was created",
                token = token,
                gotUser = user
            };
            
            return Ok(ResponseObjectUser);
        }
        catch(Exception e)
        {
            return BadRequest("Something went wrong " + e);
        }
       


    }
}