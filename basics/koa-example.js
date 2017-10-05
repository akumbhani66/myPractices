var Router = require('koa-router');
var router = Router();
var parse = require('co-body');

const Koa = require('koa');
const app =  new Koa();

router.post('/test', create)
    .get('/test2', test2);

app.use(router);

async function create(ctx) {
    // var body = await parse(this);
    // const data = await ctx.request
    console.log(">>>>>>>");
    ctx.redirect('/test2');
}

async function test2(ctx) {
    console.log("here");
}

app.listen(3000);