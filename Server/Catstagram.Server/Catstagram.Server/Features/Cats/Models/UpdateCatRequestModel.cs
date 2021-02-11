namespace Catstagram.Server.Features.Cats.Models
{
    using System.ComponentModel.DataAnnotations;

    public class UpdateCatRequestModel
    {
        [Required]
        [MaxLength(2000)]
        public string Description { get; set; }
    }
}
