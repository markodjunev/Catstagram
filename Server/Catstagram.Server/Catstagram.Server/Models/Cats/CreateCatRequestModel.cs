namespace Catstagram.Server.Models.Cats
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
