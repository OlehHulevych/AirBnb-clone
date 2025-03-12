using Airbnb_client.Models;

namespace Airbnb_client.Services;

public class ResponseObject
{
    public string meesage { get; set; }
    public User gotUser { get; set; }
    public string token { get; set; }
}