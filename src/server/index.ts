import { initHttpServer } from "./startup/initHttpServer";
import { initTcpClient } from "./startup/initTcpClient";

(async () => {
    await initTcpClient();
    await initHttpServer();
    console.info('Startup finished');
})();