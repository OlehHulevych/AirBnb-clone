using System.Security.Claims;
using System.Text;
using Airbnb_client.Models;
using Microsoft.IdentityModel.Tokens;

namespace Airbnb_client.Services;

public class GenerateToken
{
    public string GenerateToken(User User)
    {
        
        var SecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuratoin))
        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, User.Id),
            new Claim(ClaimTypes.Name, User.Name),
            new Claim(ClaimTypes.Email, User.City),
            new Claim(ClaimTypes.Role, User.Role)

        };
        
    }
}