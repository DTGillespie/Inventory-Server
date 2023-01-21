import {WebServer} from "./objects/webServer";
import express from "express";
import {Express, Request, Response} from "express";
import {ModelFactory} from "./model/modelFactory";

export function global_init(): void {

  const webServer: WebServer = new WebServer(4700, "localhost");
  const wsCtx: express.Application = webServer.getContext();

  const  modelFactory = ModelFactory.getInstance();
  modelFactory.initializeDatabaseContext();

  // Routes
  /*
  ws_ctx.get("/", (_req: Express.Request, _res: Express.Response) => {
    _req.send("String");
  }); */


};