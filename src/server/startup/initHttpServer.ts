import Koa from "koa";
import * as fs from "fs";
import * as path from "path";

export const initHttpServer = async () => {
    const app = new Koa();
    const port = 4001

    app.use(async (ctx) => {
        ctx.body = fs.readFileSync(path.resolve(__dirname, '../../public/index.html')).toString();
    });

    app.listen(port, '127.0.0.1');
    console.log(`Koa http is Listening on port ${port}`)
}