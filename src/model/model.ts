import {DatabaseContextManager} from "./databaseContextManager";
import {Sequelize} from "sequelize";

const config = require("../../config.js");

export class Model {

  database: Sequelize;

  constructor(database_Param: Sequelize) {
    this.database = database_Param;  
  };

};