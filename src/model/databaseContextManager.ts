import { Sequelize } from "sequelize";

// https://sequelize.org/docs/v6/other-topics/dialect-specific-things/
// https://tediousjs.github.io/tedious/api-connection.html#function_newConnection

export class DatabaseContextManager {

  private database: string;
  private username: string;
  private password: string;

  private sequelizeCtx: Sequelize | undefined;

  private context_created: boolean;


  constructor(
    database_Param: string, 
    username_Param: string, 
    password_Param: string
    ) {

      this.database = database_Param;
      this.username = username_Param;
      this.password = password_Param;

      this.context_created = false;
  };
  
  create_ctx(): Sequelize {

    if (this.context_created) throw (new Error(`Context already created for ${this.database} database`));

    this.sequelizeCtx = new Sequelize(
      this.database, 
      this.username,
      this.password,
    );

    this.context_created = true;
    return this.sequelizeCtx!;
  };





};