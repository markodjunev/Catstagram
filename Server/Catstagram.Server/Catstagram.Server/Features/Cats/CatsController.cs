namespace Catstagram.Server.Features.Cats
{
    using Catstagram.Server.Infrastructure;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;

    public class CatsController : ApiController
    {
        private readonly ICatsService catsService;

        public CatsController(ICatsService catsService)
        {
            this.catsService = catsService;
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult> Create(CreateCatRequestModel model)
        {
            var userId = this.User.GetId();

            var id = await this.catsService.CreateAsync(model.Description, model.ImageUrl, userId);

            return Created(nameof(this.Create), id);
        }
    }
}
