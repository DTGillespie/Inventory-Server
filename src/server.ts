import { SequelizeInterface } from "./model/sequelizeInterface";
import { DataTypes, Sequelize } from "sequelize";
import express from "express";
import { Express } from "express";

export class Server {

  public static main(): void {

    const port = "27683";
    const app: Express = express();
    
    const sequelizeInterface = SequelizeInterface.getInstance();
    const sequelize = sequelizeInterface.initializeDatabaseContext();
    Server.initializeDefaultModels(sequelize);

    Server.initializeExpress(port, app, sequelize);
  };

  private static initializeExpress(port: string, app: Express, sequelize: Sequelize): void {

    const path = require("path");
    
    app.use(express.static(`${process.cwd()}/angular-frontend/dist/angular-frontend`));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(`${process.cwd()}/angular-frontend/dist/angular-frontend/index.html`));
    });

    Server.defineExtendedRouting(app, sequelize);

    app.listen(port, () => {
      console.log(`Express listening on port: ${port}`);
    });
  };

  private static defineExtendedRouting(app: Express, sequelize: Sequelize): void {

    // Prototyping Routes
    app

    // Create Table // NOT WORKING
      .get('create-table', (req, res) => {
        sequelize
          .define(
            "instances",
            {
              instanceId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
              },
              instanceName: {
                type: DataTypes.STRING,
                allowNull: false
              }
            }
          )
          .sync();
      });
  };

  private static initializeDefaultModels(sequelize: Sequelize): void {

    sequelize

      .define(
        "instances",
        {
          instanceId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
          instanceName: {
            type: DataTypes.STRING,
            allowNull: false
          }
        }
      )

      .sync();
  };

};
