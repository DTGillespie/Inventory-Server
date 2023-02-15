import { SequelizeInterface } from "./sequelizeInterface";
import { DataTypes, Model, ModelStatic, Sequelize } from "sequelize";
import express from "express";
import { Express } from "express";
import bodyParser from "body-parser";

// Models
import { InventoryInstances } from "./models/inventoryInstances";

export class Server {

  sequelizeInterface: SequelizeInterface;
  sequelize: Sequelize;

  private port: string;
  private app: Express;

  constructor () {

    this.sequelizeInterface = SequelizeInterface.getInstance();
    this.sequelize = this.sequelizeInterface.initializeDatabaseContext();

    this.port = "37561";
    this.app = express();

    this.initializeDefaultModels();
    this.initializeExpress();
  };

  private initializeExpress(): void {

    const path = require("path");
    
    this.app.use(express.static(`${process.cwd()}/frontend/dist/angular-frontend`));
    this.app.get('/app/*', (req, res) => {
      res.sendFile(path.resolve(`${process.cwd()}/frontend/dist/angular-frontend/index.html`));
    });

    this.defineExtendedRouting();

    this.app.listen(this.port, () => {
      console.log(`\nServer listening on port: ${this.port}\n\r`);
    });
  };

  private defineExtendedRouting(): void {

    this.app
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({extended: false}))

      .post('/request/define-inventory-instance', (req, res) => {

        let data = req.body;

        //this.inventoryInstancesModel.create()
      });
  };

  private async initializeDefaultModels(): Promise<any> {
    const test = await InventoryInstances.initialize(this.sequelize);
    test.sync();
    test.create({id: null, name: "test", desc: "test desc"});
  };

};

