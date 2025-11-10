using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseApiController : ControllerBase
    {
        protected readonly IMediator Mediator;

    public BaseApiController(IMediator mediator)
    {
        Mediator = mediator ?? 
            throw new ArgumentNullException(nameof(mediator), "IMediator service is required");
    }
    }
}
