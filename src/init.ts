import { Models } from "./model/models";
import {WebServer} from "./objects/webServer";
import express from "express";
import {Express, Request, Response} from "express";

export function global_init(): void {

  const webServer: WebServer = new WebServer(23850, "localhost");
  const wsCtx: express.Application = webServer.getContext();

  Models.initialize();

  // Routes
  /*
  ws_ctx.get("/", (_req: Express.Request, _res: Express.Response) => {
    _req.send("String");
  }); */


};