using System;
using System.Security.Claims;
using Application.Interfaces;
using Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Infrastructure.Security;

public class UserAccessor(IHttpContextAccessor httpContextAccessor, AppDbContext dbContext) : IUserAccessor
{
    public async Task<User> GetUserAsync()
    {
        return await dbContext.Users.FindAsync(GetUSerId())
        ?? throw new UnauthorizedAccessException("No user is loggged");
    }

    public string GetUSerId()
    {
        return httpContextAccessor.HttpContext?.User.FindFirstValue(ClaimTypes.NameIdentifier)
            ?? throw new Exception("No user found");
    }

    public async Task<User> GetUserWithPhotosAsync()
    {
        var userId = GetUSerId();
        return await dbContext.Users
        .Include(x=> x.Photos)
        .FirstOrDefaultAsync(x=> x.Id == userId)
        ?? throw new UnauthorizedAccessException("No user is loggged");
    }
}
