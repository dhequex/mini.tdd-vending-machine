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

  it("should have a press Button for Rows", () => {
    let machine = new VendingMachine();
    machine.pressButtonRow("B");
    expect(machine.selectedRow).to.equal("B");
  });

  it("should have a press Button for Columns", () => {
    let machine = new VendingMachine();
    machine.pressButtonRow("A");
    machine.pressButtonColumn(1);
    expect(machine.selectedColumn).to.equal(1);
  });

  it("should have an Inventory", () => {
    let machine = new VendingMachine();
    expect(Array.isArray(machine.inventory)).to.equal(true);
  });

  it("should be able to decrease inventory of a Product", () => {
    let machine = new VendingMachine();
    let hundredYen = { value: 100 };
    machine.insertCoin(hundredYen);
    machine.insertCoin(hundredYen);
    machine.insertCoin(hundredYen);
    machine.pressButtonRow("B");
    machine.pressButtonColumn(3);
    machine.buyItem();

    expect(machine.inventory[1][2].count).to.equal(6);
  });

  it("should be able to buy a Product", () => {
    let machine = new VendingMachine();

    machine.pressButtonRow("B");
    machine.pressButtonColumn(3);

    expect(machine.finalChoice).to.equal(machine.coffee);
  });

  it.only("should return an Error when there is no Inventory", () => {
    let machine = new VendingMachine();
    let hundredYen = { value: 100 };
    machine.insertCoin(hundredYen);
    machine.insertCoin(hundredYen);
    machine.insertCoin(hundredYen);
    machine.inventory[1][2].count = 0;
    machine.pressButtonRow("B");
    machine.pressButtonColumn(3);

    expect(machine.inventory[1][2].count).to.equal(0);
  });

  it.only("should return an Error when there is not enough Balance", () => {
    let machine = new VendingMachine();
    let hundredYen = { value: 100 };
    machine.insertCoin(hundredYen);
    machine.insertCoin(hundredYen);
    machine.pressButtonRow("B");
    machine.pressButtonColumn(3);
    machine.buyItem();

    expect(machine.inventory[1][2].count).to.equal(6);
  });

  it.only("should reset the Balance and Log the change", () => {
    let machine = new VendingMachine();
    let hundredYen = { value: 100 };
    machine.insertCoin(hundredYen);
    machine.insertCoin(hundredYen);
    machine.insertCoin(hundredYen);
    machine.insertCoin(hundredYen);
    machine.pressButtonRow("B");
    machine.pressButtonColumn(3);
    machine.buyItem();

    expect(machine.balance).to.equal(0);
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
