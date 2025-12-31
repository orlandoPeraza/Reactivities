using System;

namespace Application.Profiles.DTOs;

public class PhotoDto
{    public string Id { get; set; } = string.Empty;
    public required string Url { get; set; }
    public required string PublicId { get; set; }
    public required string USerId { get; set; }
}
