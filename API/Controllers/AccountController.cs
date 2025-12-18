using System;
using API.DTOs;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class AccountController: BaseApiController
{
     private readonly SignInManager<User> _signInManager;

    public AccountController(IMediator mediator, SignInManager<User> signInManager) 
        : base(mediator)
    {
        _signInManager = signInManager;
    }

    [AllowAnonymous]
    [HttpPost("register")]
    public async Task<ActionResult> RegisterUser(RegisterDto registerDto)
    {
        var user = new User
        {
            UserName = registerDto.Email,
            Email = registerDto.Email,
            DisplayName = registerDto.DisplayName
        };
        var result = await _signInManager.UserManager.CreateAsync(user, registerDto.Password);

        if(result.Succeeded) return Ok();
        foreach (var error in result.Errors)
        {
            ModelState.AddModelError(error.Code, error.Description);            
        }
        return ValidationProblem();
    }

    [AllowAnonymous]
    [HttpGet("user-info")]
    public async Task<ActionResult> GetUserInfo()
    {
        if(User.Identity?.IsAuthenticated == false) return NoContent();

        var user = await _signInManager.UserManager.GetUserAsync(User);
        if(user== null) return Unauthorized();

        return Ok(new
        {
            user.DisplayName,
            user.Email,
            user.Id,
            user.ImageUrl
        });               
    }

    [HttpPost("logout")]
    public async Task<ActionResult> Logout()
    {
        await _signInManager.SignOutAsync();
        return NoContent();
    }
}
