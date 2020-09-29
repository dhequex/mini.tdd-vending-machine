const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");

describe("vending machine", () => {
  it("should have an insertCoin Method", () => {
    let machine = new VendingMachine();
    expect(typeof machine.insertCoin).to.equal("function");
  });

  it("should have a Balance variable", () => {
    let machine = new VendingMachine();
    expect(typeof machine.balance).to.equal("number");
  });

  it("should have a till to map coins", () => {
    let machine = new VendingMachine();
    expect(typeof machine.till).to.equal("object");
  });

  it("should have selectedRow storage", () => {
    let machine = new VendingMachine();
    expect(typeof machine.selectedRow).to.equal("string");
  });

  it("should have selectedColumn storage", () => {
    let machine = new VendingMachine();
    expect(typeof machine.selectedColumn).to.equal("number");
  });

  it.only("should modify Balance after inserting coin", () => {
    let machine = new VendingMachine();
    let coin = { value: 50 };
    machine.insertCoin(coin);
    expect(machine.balance).to.equal(50);
  });

  it("should accept valid coins", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    machine.insertCoin(500);

    // Assert
    expect(machine.till).to.deep.equal({
      10: 0,
      50: 0,
      100: 0,
      500: 1,
    });
    expect(machine.balance).to.equal(500); // Use an ES6 getter
  });
});
