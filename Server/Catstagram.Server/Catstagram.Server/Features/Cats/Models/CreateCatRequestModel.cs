namespace Catstagram.Server.Features.Cats.Models
{
    using System.ComponentModel.DataAnnotations;

    public class CreateCatRequestModel
    {
        [Required]
        public string ImageUrl { get; set; }

        [Required]
        [MaxLength(2000)]
        public string Description { get; set; }
    }
}
