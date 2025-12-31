using System;
using Application.Core;
using Application.Interfaces;
using Application.Profiles.DTOs;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Http;
using Persistence;

namespace Application.Profiles.Commands;

public class AddPhoto
{
    public class Command : IRequest<Result<PhotoDto>>
    {
        public required IFormFile File { get; set; }
    }

    public class Handler(IUserAccessor userAccessor, AppDbContext context, IPhotoService photoService, IMapper mapper) : IRequestHandler<Command, Result<PhotoDto>>
    {
        public async Task<Result<PhotoDto>> Handle(Command request, CancellationToken cancellationToken)
        {
            var uploadResult =  await photoService.UploadPhoto(request.File);

            if(uploadResult == null) return Result<PhotoDto>.Failure("Failed to upload photo", 400);

            var user = await userAccessor.GetUserAsync();

            var photo =new Photo
            {
                Url = uploadResult.Url,
                PublicId = uploadResult.PublicId,
                USerId = user.Id,
                User = user
            };

            user.ImageUrl ??= photo.Url;
            user.Photos.Add(photo);
            var result = await context.SaveChangesAsync(cancellationToken) > 0;

            return result
            ? Result<PhotoDto>.Success(mapper.Map<PhotoDto>(photo))
            : Result<PhotoDto>.Failure("Problem saving photo to DB", 400);
        }
    }
}
