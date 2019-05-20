const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const router = require("koa-router")({ prefix: "/api" });

const app = new Koa();
app.keys = ["some secret", "another secret"];

const goods = [
  { id: 1, text: "Web全栈架构师", price: 1000 },
  { id: 2, text: "Python架构师", price: 1000 }
];

router.get("/goods", ctx => {
  ctx.body = {
    ok: 1,
    goods
  };
});

router.post("/goods", ctx => {
  goods.push({
    id: goods.length + 1,
    text: ctx.request.body.text,
    price: 1000
  });
  ctx.body = {
    ok: 1
  };
});

router.post("/login", ctx => {
  const user = ctx.request.body;
  if (user.username === "jerry" && user.password === "123") {
    ctx.cookies.set("token", "a mock token");
    ctx.body = { ok: 1, token: "a mock token" };
  } else {
    ctx.body = { ok: 0 };
  }
});

app.use(bodyparser());
app.use(router.routes());

app.listen(8080);
