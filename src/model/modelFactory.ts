import {Sequelize} from "sequelize";
import {DatabaseContextManager} from "./databaseContextManager";

import * as config from "../../config.json";

export class ModelFactory {

  private static instance: ModelFactory | undefined;

  private databaseContextManager: DatabaseContextManager;
  private testDatabase: Sequelize | undefined;

  private constructor() {
    this.databaseContextManager = DatabaseContextManager.getInstance();
  };

  public static getInstance(): ModelFactory {

    if (ModelFactory.instance == undefined) {
      ModelFactory.instance = new ModelFactory();
    };

    return ModelFactory.instance;
  };

  public initializeDatabaseContext(): ModelFactory {
    
    this.databaseContextManager
      .configureDialect(config.database.dialect)
      .setDatabaseHandle(config.database.authentication.db_name)
      .setDatabasePath(`${process.cwd()}/data/${config.database.authentication.db_name}.db`)
      .configureAuthentication(
        config.database.authentication.db_username,
        config.database.authentication.db_password
      );

    this.testDatabase = this.databaseContextManager.createCtx();
    
    return this;
  };

  public newModel(): ModelFactory {
    return this;
  };


};