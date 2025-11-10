using System;
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ActivitiesController(IMediator mediator) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        return await mediator.Send(new GetActivityList.Query());
    }

    [HttpGet("{Id}")]
    public async Task<ActionResult<Activity>> GetActivityDetail(string id)
    {
        return await mediator.Send(new GetActivityDetails.Query { Id = id });
    }
}
