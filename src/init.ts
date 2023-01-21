import {WebServer} from "./objects/webServer";
import express from "express";
import {DataTypes} from "sequelize";
import {Express, Request, Response} from "express";
import {SequelizeInterface} from "./model/sequelizeInterface";

export function global_init(): void {

  const webServer: WebServer = new WebServer(4700, "localhost");
  const wsCtx: express.Application = webServer.getContext();

  // Init
  const  sequelizeInterface = SequelizeInterface.getInstance();
  const sequelize = sequelizeInterface.initializeDatabaseContext();

  // Create test model
  const testTable = sequelize
    .define(
      "testTable", 
        {
        testStringField: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        testIntegerField: {
          type: DataTypes.INTEGER,
          allowNull: false,
        }
      }
    )
    .sync();

  // Routes
  /*
  ws_ctx.get("/", (_req: Express.Request, _res: Express.Response) => {
    _req.send("String");
  }); */


};