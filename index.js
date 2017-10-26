const http = require('http');

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const api = require('./router/api');

router.use('/api', api.routes(), api.allowedMethods())

app.use(router.routes())
.use(router.allowedMethods());

// listen
// app.listen(3000, () => {
//   console.log("** koa started on port 3000. **");
// });

const server = http.createServer(app.callback());
server.listen(3000, () => {
  console.log('** koa started on port 3000. **');
});

module.exports = app;