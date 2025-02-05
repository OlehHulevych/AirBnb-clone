﻿using System.ComponentModel.DataAnnotations;

namespace AirBnbApi.Dtos;

public class RegisterDto
{
    [Required]
    public string Username { get; set; }
    [Required]
    public string Name { get; set; }
    [Required]
    [EmailAddress]
    public string Email { get; set; }
    [Required]
    public string Password { get; set; }
    [Required]
    public string Role { get; set; }

}