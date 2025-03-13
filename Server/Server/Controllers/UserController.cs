using Airbnb_client.Data;
using Airbnb_client.DTO;
using Airbnb_client.Models;
using Airbnb_client.Services;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
                Estates = new List<Estate>(),
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
    
    [HttpPost("login")]

    public IActionResult Login([FromBody] LoginRequestDto loginDto)
    {

        try
        {
            var user = _context.Users.Include(u => u.FavoriteList).FirstOrDefault((user) => user.Name == loginDto.Name);
            if (user == null)
            {
                return BadRequest("The user not found");
            }

            if (!_jwtService.VerifyPassword(loginDto.Password, user.Password))
            {
                return BadRequest("Incorrect password");
            }

            var token = _jwtService.GenerateToken(user);

            var ResponseObject = new ResponseObject()
            {
                meesage = "Ther user was loged",
                gotUser = user,
                token = token,
            };
            return Ok(ResponseObject);
        }

        catch (Exception e)
        {
            return BadRequest("Something went wrong, there are error: " + e);
        }

    }
}