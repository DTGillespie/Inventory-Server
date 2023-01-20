
export class Test {

  testVariable: number;

  constructor(testParam: number) {
    this.testVariable = testParam;
  };

  testFunction(): void {
    console.log("In Class, test variable: " + this.testVariable);
  };

};