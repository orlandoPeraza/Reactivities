using System;
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ActivitiesController: BaseApiController
{
    public ActivitiesController(IMediator mediator) : base(mediator)
    {
    }
    
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        return await Mediator.Send(new GetActivityList.Query());
    }

    [HttpGet("{Id}")]
    public async Task<ActionResult<Activity>> GetActivityDetail(string id)
    {
        return await Mediator.Send(new GetActivityDetails.Query { Id = id });
    }
}
