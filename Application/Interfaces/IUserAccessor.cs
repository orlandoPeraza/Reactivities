using System;
using Domain;

namespace Application.Interfaces;

public interface IUserAccessor
{
    string GetUSerId();
    Task<User> GetUserAsync();
}
