namespace Catstagram.Server.Data.Models
{
    public class Cat
    {
        public int Id { get; set; }

        public string Description { get; set; }

        public string ImageUrl { get; set; }

        public string UserId { get; set; }

        public User User { get; set; }
    }
}
