"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseContextManager = void 0;
const sequelize_1 = require("sequelize");
// https://sequelize.org/docs/v6/other-topics/dialect-specific-things/
// https://tediousjs.github.io/tedious/api-connection.html#function_newConnection
class DatabaseContextManager {
    constructor(database_Param, username_Param, password_Param) {
        this.database = database_Param;
        this.username = username_Param;
        this.password = password_Param;
        this.context_created = false;
    }
    ;
    create_ctx() {
        if (this.context_created)
            throw (new Error(`Context already created for ${this.database} database`));
        this.sequelizeCtx = new sequelize_1.Sequelize(this.database, this.username, this.password);
        this.context_created = true;
        return this.sequelizeCtx;
    }
    ;
}
exports.DatabaseContextManager = DatabaseContextManager;
;
