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
    
    app.use(express.static(`${process.cwd()}/frontend/dist/angular-frontend`));
    app.get('/app/*', (req, res) => {
      res.sendFile(path.resolve(`${process.cwd()}/frontend/dist/angular-frontend/index.html`));
    });

    Server.defineExtendedRouting(port, app, sequelize);

    app.listen(port, () => {
      console.log(`\nServer listening on port: ${port}\n\r`);
    });
  };

  private static defineExtendedRouting(port: string, app: Express, sequelize: Sequelize): void {

    app
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({extended: false}))

      .post('/request/create-table', (req, res) => {

        console.log("POST request /request/create-table");

        let data = req.body;

        sequelize
          .define(
            data.tableName,
            {
              "test": {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
              }
            },
            {
              freezeTableName: true,
              underscored: true,
            }
          )
          .sync();

          res.send(`POST request successful`);
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
