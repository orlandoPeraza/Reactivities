using Application.Profiles.Commands;
using Application.Profiles.DTOs;
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
    }
}
