using System;

namespace Domain;

public class Photo
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string Url { get; set; }
    public required string PublicId { get; set; }
    
    //Navigation properties
    public required string USerId { get; set; }
    public User User { get; set; } = null!;

}
