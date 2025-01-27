using AirBnbApi.Data;
using AirBnbApi.Models;
using AirBnbApi.Utilities;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AirBnbApi.Controllers;

[ApiController]
[Route("api/user")]
public class UserController:ControllerBase
{
    private readonly IConfiguration _configuration;
    private readonly ApplicationDbContext _context;

    public UserController(ApplicationDbContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] User user)
    {
        if (await _context.Users.AnyAsync(u => u.Username == user.Username))
        {
            return BadRequest("The username already exist ");
        }

        user.Password = PasswordHasher.HashPassword(user.Password);
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        return Ok(new { message = "User registred succesfully" });
    }

    [HttpPost("login")]
    public async Task<IActionResult> login([FromBody] User user)
    {
        var userFound = _context.Users.SingleOrDefault(u => u.Username == user.Username);
        if (userFound == null || !PasswordHasher.VerifyPassword(user.Password, user.Password))
        {
            return Unauthorized("Invalid username or password");
        }

        var token = AuthService.Create(user);
        return Ok(new { token });
    }
}