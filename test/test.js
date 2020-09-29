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

  it("should modify Balance after inserting coin", () => {
    let machine = new VendingMachine();
    let fiftyYen = { value: 50 };
    machine.insertCoin(fiftyYen);
    expect(machine.balance).to.equal(50);
  });

  it("should modify TILL after inserting coin", () => {
    let machine = new VendingMachine();
    let fiftyYen = { value: 50 };
    machine.insertCoin(fiftyYen);
    expect(machine.till.fiftyYen.count).to.equal(1);
  });

  it("should keep a count of Coins", () => {
    let machine = new VendingMachine();
    let fiftyYen = { value: 50 };
    machine.insertCoin(fiftyYen);
    machine.insertCoin(fiftyYen);
    machine.insertCoin(fiftyYen);
    expect(machine.till.fiftyYen.count).to.equal(3);
  });

  it.only("should have a press Button for Rows", () => {
    let machine = new VendingMachine();
    machine.pressButtonRow("B");
    expect(machine.selectedRow).to.equal("B");
  });

  it.only("should have a press Button for Columns", () => {
    let machine = new VendingMachine();
    machine.pressButtonColumn(3);
    expect(machine.selectedColumn).to.equal(3);
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
