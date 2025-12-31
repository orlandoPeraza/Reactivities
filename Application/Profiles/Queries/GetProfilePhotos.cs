using System;
using Application.Core;
using Application.Profiles.DTOs;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Profiles.Queries;

public class GetProfilePhotos
{
    public class Query : IRequest<Result<List<PhotoDto>>>
    {
        public required string UserId { get; set; }
    }

    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Query, Result<List<PhotoDto>>>
    {
        public async Task<Result<List<PhotoDto>>> Handle(Query request, CancellationToken cancellationToken)
        {
            var photos = await context.Users
            .Where(x=> x.Id == request.UserId)
            .SelectMany(x => x.Photos)
            .ToListAsync(cancellationToken);
            return Result<List<PhotoDto>>.Success(mapper.Map<List<PhotoDto>>(photos));
        }
    }

}
