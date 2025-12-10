using Application.Activities.Commands;
using FluentValidation;

namespace Application.Activities.Validators;

public class EditActivityValidator : AbstractValidator<EditActivity.Command>
{
    public EditActivityValidator()
    {
        RuleFor(x => x.ActivityDto)
            .Must(a => a != null && a.GetType().GetProperties().Any(p => p.GetValue(a) != null))
            .WithMessage("Activity body cannot be empty");
        RuleFor(x => x.Id)
            .NotEmpty().WithMessage("Id is required");
    }
}
