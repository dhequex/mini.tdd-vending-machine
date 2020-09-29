// your class here
/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/

class VendingMachine {
  constructor() {
    this.balance = 0;
    this.till = {
      oneYen: { value: 1, count: 0 },
      fiveYen: { value: 5, count: 0 },
      tenYen: { value: 10, count: 0 },
      fiftyYen: { value: 50, count: 0 },
      hundredYen: { value: 100, count: 0 },
      fiveHundredYen: { value: 500, count: 0 },
    };
    this.selectedRow = "A";
    this.selectedColumn = 1;
  }

  insertCoin(denomination) {
    this.balance += denomination.value;
    if (denomination.value === 1) this.till.oneYen.count++;
    if (denomination.value === 5) this.till.fiveYen.count++;
    if (denomination.value === 10) this.till.tenYen.count++;
    if (denomination.value === 50) this.till.fiftyYen.count++;
    if (denomination.value === 100) this.till.hundredYen.count++;
    if (denomination.value === 500) this.till.fiveHundredYen.count++;
  }

  pressButtonRow(string) {
    this.selectedRow = string;
    console.log(this.selectedRow);
  }

  pressButtonColumn(number) {
    this.selectedColumn = number;
    console.log(this.selectedColumn);
  }
}

let _ = new VendingMachine();
console.log(typeof _.insertCoin);
module.exports = VendingMachine;
