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
    this.juice = { name: "Apple Juice", price: 350, count: 5 };
    this.coffee = { name: "Juan Valdez", price: 250, count: 7 };
    this.candy = { name: "Snickers", price: 100, count: 10 };
    this.bakery = { name: "Croissant", price: 300, count: 5 };
    this.inventory = [
      [this.juice, this.juice, this.juice, this.juice],
      [this.coffee, this.coffee, this.coffee, this.coffee],
      [this.candy, this.candy, this.candy, this.candy],
      [this.bakery, this.bakery, this.bakery, this.bakery],
    ];
    this.rowChoice;
    this.finalChoice;
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
    if (this.selectedRow === "A") this.rowChoice = this.inventory[0];
    if (this.selectedRow === "B") this.rowChoice = this.inventory[1];
    if (this.selectedRow === "C") this.rowChoice = this.inventory[2];
    if (this.selectedRow === "D") this.rowChoice = this.inventory[3];
    console.log(this.selectedRow);
  }

  pressButtonColumn(number) {
    this.selectedColumn = number;
    if (this.selectedColumn === 1) this.finalChoice = this.rowChoice[0];
    if (this.selectedColumn === 2) this.finalChoice = this.rowChoice[1];
    if (this.selectedColumn === 3) this.finalChoice = this.rowChoice[2];
    if (this.selectedColumn === 4) this.finalChoice = this.rowChoice[3];
    console.log(this.selectedColumn);
    if (this.finalChoice.count < 1) console.log("Out of Stock");
  }

  buyItem() {
    if (this.balance < this.finalChoice.price)
      console.log("Insufficient Funds");

    console.log(this.selectedRow + this.selectedColumn);
    console.log("Here is your " + this.finalChoice.name);
    this.finalChoice.count--;
    console.log(this.balance - this.finalChoice.price);
    this.balance = 0;
  }
}

let _ = new VendingMachine();
console.log(typeof _.insertCoin);
module.exports = VendingMachine;
