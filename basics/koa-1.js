const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
	ctx.body('hi');
});

app.listen(3000);
