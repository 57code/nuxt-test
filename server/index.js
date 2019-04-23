const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const session = require("koa-session");
const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");
const api = require("./api");

const app = new Koa();
app.keys = ["some secret", "another secret"];

// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = !(app.env === "production");

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config);

  const {
    host = process.env.HOST || "127.0.0.1",
    port = process.env.PORT || 3000
  } = nuxt.options.server;

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  app.use(bodyparser());

  const SESS_CONFIG = {
    key: "kkb:sess", // 设置cookie中的key名字 sid koa:sess
    maxAge: 86400000, // 有效期：默认一天
    httpOnly: true, // 仅服务端修改
    signed: true // 签名cookie
  };
  app.use(session(SESS_CONFIG, app));

  app.use(api.routes());

  app.use(ctx => {
    ctx.status = 200;
    ctx.respond = false; // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res);
  });

  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}

start();
