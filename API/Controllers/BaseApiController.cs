using Application.Core;
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
    
    protected ActionResult<T> HandleResult<T>(Result<T> result)
    {
        if (result == null) return NotFound();

        if (!result.IsSuccess)
        {
            return result.Code switch
            {
                404 => NotFound(new ProblemDetails { Title = result.Error, Status = 404 }),
                400 => BadRequest(new ProblemDetails { Title = result.Error, Status = 400 }),
                401 => Unauthorized(new ProblemDetails { Title = result.Error, Status = 401 }),
                _   => BadRequest(new ProblemDetails { Title = result.Error, Status = result.Code })
            };
        }

        return Ok(result.Value);
    }

    }
}
