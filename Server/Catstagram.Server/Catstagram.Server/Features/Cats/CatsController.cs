namespace Catstagram.Server.Features.Cats
{
    using Catstagram.Server.Features.Cats.Models;
    using Catstagram.Server.Infrastructure.Extensions;
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public class CatsController : ApiController
    {
        private readonly ICatsService catsService;

        public CatsController(ICatsService catsService)
        {
            this.catsService = catsService;
        }

        [HttpGet]
        public async Task<IEnumerable<CatListingServiceModel>> Mine()
        {
            var userId = this.User.GetId();

            var cats = await this.catsService.ByUser(this.User.GetId());

            return cats;
        }

        [HttpPost]
        public async Task<ActionResult> Create(CreateCatRequestModel model)
        {
            var userId = this.User.GetId();

            var id = await this.catsService.CreateAsync(model.Description, model.ImageUrl, userId);

            return Created(nameof(this.Create), id);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<CatDetailsServiceModel> Details(int id)
            => await this.catsService.Details(id);

        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult> Update(int id, UpdateCatRequestModel model)
        {
            var userId = this.User.GetId();

            var result = await this.catsService.Update(
                id,
                model.Description,
                userId);

            if (!result)
            {
                return BadRequest();
            }

            return Ok();
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var userId = this.User.GetId();

            var result = await this.catsService.Delete(id, userId);
            if (!result)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}
