namespace Catstagram.Server.Features.Cats
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Catstagram.Server.Data;
    using Catstagram.Server.Data.Models;
    using Microsoft.EntityFrameworkCore;

    public class CatsService : ICatsService
    {
        private readonly CatstagramDbContext data;

        public CatsService(CatstagramDbContext data)
        {
            this.data = data;
        }

        public async Task<IEnumerable<CatListingServiceModel>> ByUser(string userId)
            => await this.data
                .Cats
                .Where(c => c.UserId == userId)
                .Select(c => new CatListingServiceModel
                {
                    Id = c.Id,
                    ImageUrl = c.ImageUrl
                })
                .ToListAsync();

        public async Task<int> CreateAsync(string description, string imageUrl, string userId)
        {
            var cat = new Cat
            {
                Description = description,
                ImageUrl = imageUrl,
                UserId = userId,
            };

            this.data.Add(cat);

            await this.data.SaveChangesAsync();

            return cat.Id;
        }
    }
}
