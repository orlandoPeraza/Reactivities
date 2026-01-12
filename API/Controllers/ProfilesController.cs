using Application.Profiles.Commands;
using Application.Profiles.DTOs;
using Application.Profiles.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    public class ProfilesController : BaseApiController
    {
        public ProfilesController(IMediator mediator) : base(mediator)
        {
        }

        [HttpPost("add-photo")]
        public async Task<ActionResult<PhotoDto>> AddPhoto(IFormFile file)
        {
            return HandleResult(await Mediator.Send(new AddPhoto.Command{File = file}));
        }

        [HttpGet("{userId}/photos")]
        public async Task<ActionResult<List<PhotoDto>>> GetPhotosForUser(string userId)
        {
            return HandleResult(await Mediator.Send(new GetProfilePhotos.Query{UserId = userId}));
        }

        [HttpDelete("{photoId}/photos")]
        public async Task<ActionResult> DeletePhoto(string photoId)
        {
            return HandleResult(await Mediator.Send(new DeletePhoto.Command { PhotoId = photoId }));
        }

        [HttpPut("{photoId}/setMain")]
        public async Task<ActionResult> SetMainPhoto(string photoId)
        {
            return HandleResult(await Mediator.Send(new SetMainPhoto.Command{PhotoId = photoId}));
        }

        [HttpGet("{userId}")]
        public async Task<ActionResult<UserProfileDto>> GetProfile(string userId)
        {
            return HandleResult(await Mediator.Send(new GetProfile.Query{UserId = userId}));
        }

        [HttpPut]
        public async Task<ActionResult> EditProfile(UserProfileDto userProfileDto)
        {
            return HandleResult(await Mediator.Send(new EditProfile.Command
            {
                UserProfileDto = userProfileDto
            }));
        }
    }
}
