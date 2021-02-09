namespace Catstagram.Server.Features.Cats
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface ICatsService
    {
        Task<int> CreateAsync(string description, string imageUrl, string userId);

        Task<IEnumerable<CatListingServiceModel>> ByUser(string userId);
    }
}
