"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebServer = void 0;
const express_1 = __importDefault(require("express"));
class WebServer {
    constructor(port, host) {
        this.port = port;
        this.host = host;
        this.app = (0, express_1.default)();
        this.routes = [];
    }
    ;
    get_context() {
        return this.app;
    }
    ;
    start() {
    }
    ;
}
exports.WebServer = WebServer;
;
