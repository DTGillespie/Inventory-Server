import {WebServer} from "./objects/webServer";
import express from "express";
import {Express, Request, Response} from "express";
import {iModel} from "./model/iModel";

export function global_init(): void {
  
  // Primary web-server initialization
  const webServer: WebServer = new WebServer(4700, "localhost");
  const wsCtx: express.Application = webServer.get_context();

  // Model interface instance
  const  modelInterface = iModel.getInstance();

  // Create Models
  modelInterface.createModel(); // Stopped here




  // Routes
  /*
  ws_ctx.get("/", (_req: Express.Request, _res: Express.Response) => {
    _req.send("String");
  }); */


};