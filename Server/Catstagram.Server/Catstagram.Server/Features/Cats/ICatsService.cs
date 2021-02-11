namespace Catstagram.Server.Features.Cats
{
    using Catstagram.Server.Features.Cats.Models;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface ICatsService
    {
        Task<int> CreateAsync(string description, string imageUrl, string userId);

        Task<IEnumerable<CatListingServiceModel>> ByUser(string userId);

        Task<CatDetailsServiceModel> Details(int id);

        Task<bool> Update(int id, string description, string userId);

        Task<bool> Delete(int id, string userId);
    }
}
