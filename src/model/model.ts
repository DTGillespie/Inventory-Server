import {Sequelize} from "sequelize";

export class Model {

  database: Sequelize;

  constructor(database: Sequelize) {
    this.database = database;  
  };

};