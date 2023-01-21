import { DataTypes } from "sequelize";
import { SequelizeInterface } from "./sequelizeInterface";

export class Models {

  public static initialize(): void {

    const  sequelizeInterface = SequelizeInterface.getInstance();
    const sequelize = sequelizeInterface.initializeDatabaseContext();

    // Define Tables
    sequelize

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
  };

};