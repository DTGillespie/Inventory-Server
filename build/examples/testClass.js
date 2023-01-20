"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
class Test {
    constructor(testParam) {
        this.testVariable = testParam;
    }
    ;
    testFunction() {
        console.log("In Class, test variable: " + this.testVariable);
    }
    ;
}
exports.Test = Test;
;
