import {Sequelize} from "sequelize";
import {DatabaseContextManager} from "./databaseContextManager";

const config = require("../../config.js");

export class iModel {

  private static instance: iModel | undefined;

  private dcm: DatabaseContextManager;
  private test_database: Sequelize;

  private constructor() {

    this.dcm = new DatabaseContextManager(
      config.authentication.db_name, 
      config.authentication.username, 
      config.authentication.password
    );

    this.test_database = this.dcm.create_ctx();
  };

  public static getInstance(): iModel {

    if (iModel.instance == undefined) {
      iModel.instance = new iModel();
    };

    return iModel.instance;
  };

  public createModel(): void {

  };


};