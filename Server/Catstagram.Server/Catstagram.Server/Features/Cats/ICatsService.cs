namespace Catstagram.Server.Features.Cats
{
    using System.Threading.Tasks;

    public interface ICatsService
    {
        Task<int> CreateAsync(string description, string imageUrl, string userId);
    }
}
