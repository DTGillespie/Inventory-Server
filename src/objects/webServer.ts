import express from "express";

type Route = {
  route: string,
  callback: Function
};

export class WebServer {

  port: number;
  host: string;
  app: express.Application;
  routes: Route[];

  constructor(port: number, host: string) {

    this.port = port;
    this.host = host;

    this.app = express();
    
    this.routes = [];
  };

  getContext(): express.Application {
    return this.app;
  }; 

  start(): void {
  };

  /*
  define_Route(route_Param: string, callback_Param: Function): void {

    let newRoute: Route = {
      route: route_Param,
      callback: callback_Param 
    };

    this.routes.push(newRoute);
  }; 

  start(): void {
    for (let index of this.routes) {
      this.app.get(index.route, index.callback());
    };
  }; */

};