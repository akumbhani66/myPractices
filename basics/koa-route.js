const route = require('koa-route');
const Koa = require('koa');
const app = new Koa();
var parse = require('co-body');

app.use(route.post('/getNumber', getNo));
app.use(route.post('/showNumber', showNo));

let DB = {};

async function getNo(ctx) {
    var body = await parse(ctx);
    DB.One = body['1'];
    DB.Two = body['2'];
    DB.Three = body['3'];
    ctx.body = DB;
    ctx.redirect('/showNumber');
}

async function showNo(ctx) {
    ctx.body = DB;
}

app.listen(3000);
console.log('listening on port 3000');