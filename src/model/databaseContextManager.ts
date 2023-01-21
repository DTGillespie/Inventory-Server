import { Sequelize } from "sequelize";

// SQLite3
import sqlite3 from "sqlite3";
import { open } from 'sqlite';

// https://sequelize.org/docs/v6/other-topics/dialect-specific-things/

// Reference this
// https://www.atdatabases.org/blog/2021/02/03/create-sqlite-database

export class DatabaseContextManager {

  private static instance: DatabaseContextManager | undefined;

  private dialect: string;
  private database: string;
  private databasePath: string;
  private username: string;
  private password: string;

  private sequelizeCtx: Sequelize | undefined;

  private contextCreated: boolean;

  private constructor() {
    this.dialect = "undefined";
    this.database = "undefined";
    this.databasePath = "undefined";
    this.username = "undefined";
    this.password = "undefined";

    this.contextCreated = false;
  };

  public static getInstance(): DatabaseContextManager {

    if (DatabaseContextManager.instance == undefined) {
      DatabaseContextManager.instance = new DatabaseContextManager();
    };

    return DatabaseContextManager.instance;
  };

  public configureDialect(dialect: string): DatabaseContextManager {
    this.dialect = dialect;
    return this;
  };

  public setDatabaseHandle(database: string): DatabaseContextManager {
    this.database = database;
    return this;
  };

  public setDatabasePath(databasePath: string): DatabaseContextManager {

    if (this.dialect != "sqlite") console.log(`Warning: Database path is not an applicable configuration for dialect: ${this.dialect}`);

    this.databasePath = databasePath;
    return this;
  };
  
  public configureAuthentication(username: string, password: string) {

    this.username = username;
    this.password = password;

    return this;
  };

  public createCtx(): Sequelize {

    if (this.contextCreated) throw (new Error(`Context already created for ${this.database} database`));

    this.preconfigureDatabase();

    this.sequelizeCtx = new Sequelize(
      this.database, 
      this.username,
      this.password,
      this.configureOptions()
    );

    this.contextCreated = true;
    return this.sequelizeCtx!;
  };

  private configureOptions(): Object {
    
    let options = {};

    switch (this.dialect) {

      case "sqlite": {

        options = {
          dialect: 'sqlite',
          storage: this.databasePath,
          dialectOptions: {
            mode: sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, //| sqlite3.OPEN_FULLMUTEX,
          },
        };

        break;
      };

    };

    return options;
  };

  private preconfigureDatabase(): void {
    switch (this.dialect) {

      case "sqlite": {

        let connection = (async () => {
          await open({
            filename: this.databasePath,
            driver: sqlite3.Database
          });
        });

        break;
      };

    };
  };


};