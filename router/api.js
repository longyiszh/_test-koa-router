const Router = require('koa-router');

const router = new Router();

/* GET api listing. */
router.get('/', async (ctx, next) => {
  ctx.body="api works!"
});

module.exports = router;