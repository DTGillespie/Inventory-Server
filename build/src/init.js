"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.global_init = void 0;
const webServer_1 = require("./objects/webServer");
const iModel_1 = require("./model/iModel");
function global_init() {
    // Primary web-server initialization
    const webServer = new webServer_1.WebServer(4700, "localhost");
    const wsCtx = webServer.get_context();
    // Model interface instance
    const modelInterface = iModel_1.iModel.getInstance();
    // Create Models
    modelInterface.createModel(); // Stopped here
    // Routes
    /*
    ws_ctx.get("/", (_req: Express.Request, _res: Express.Response) => {
      _req.send("String");
    }); */
}
exports.global_init = global_init;
;
