import { SequelizeInterface } from "./model/sequelizeInterface";
import { DataTypes, Sequelize } from "sequelize";
import express from "express";
import { Express } from "express";
import bodyParser from "body-parser";

export class Server {

  public static main(): void {

    const port = "37561";
    const app: Express = express();
    
    const sequelizeInterface = SequelizeInterface.getInstance();
    const sequelize = sequelizeInterface.initializeDatabaseContext();
    Server.initializeDefaultModels(sequelize);

    Server.initializeExpress(port, app, sequelize);
  };

  private static initializeExpress(port: string, app: Express, sequelize: Sequelize): void {

    const path = require("path");
    
    app.use(express.static(`${process.cwd()}/angular-frontend/dist/angular-frontend`));
    app.get('/app/*', (req, res) => {
      res.sendFile(path.resolve(`${process.cwd()}/angular-frontend/dist/angular-frontend/index.html`));
    });

    Server.defineExtendedRouting(port, app, sequelize);

    app.listen(port, () => {
      console.log(`Frontend listening on port: ${port}`);
    });
  };

  private static defineExtendedRouting(port: string, app: Express, sequelize: Sequelize): void {

    const urlEncodedParser = bodyParser.urlencoded({extended: false});

    // Prototyping Routes
    app
      //.use(bodyParser.json())

      .get('/request/create-table', urlEncodedParser, (req, res) => {

        console.log(req.body);
        console.log(req.query);

        res.send(req.query);
        
        sequelize
          .define(
            "testCreateTable",
            {
              "test": {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
              }
            }
          )
          .sync();
      });
  };

  private static initializeDefaultModels(sequelize: Sequelize): void {

    sequelize

      .define(
        "inventoryInstances",
        {
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false
          }
        }
      )

      .sync();
  };

};
