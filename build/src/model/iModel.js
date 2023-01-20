"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iModel = void 0;
const databaseContextManager_1 = require("./databaseContextManager");
const config = require("../../config.js");
class iModel {
    constructor() {
        this.dcm = new databaseContextManager_1.DatabaseContextManager(config.authentication.db_name, config.authentication.username, config.authentication.password);
        this.test_database = this.dcm.create_ctx();
    }
    ;
    static getInstance() {
        if (iModel.instance == undefined) {
            iModel.instance = new iModel();
        }
        ;
        return iModel.instance;
    }
    ;
    createModel() {
    }
    ;
}
exports.iModel = iModel;
;
