class SmartDevice {
  #id = Math.random().toString().slice(2, 15);
  #status = "off";

  static deviceCount = 0;

  static generateId() {
    return Math.random().toString().slice(2, 15);
  }

  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.#status = "off";
    SmartDevice.deviceCount += 1;
  }

  get Status() {
    return this.#status;
  }

  set Status(newStatus) {
    if (newStatus !== "on" && newStatus !== "off") {
      throw new Error('Status must be "on" or "off"');
    }
    this.#status = newStatus;
  }

  get Info() {
    return `Device ${this.name} is ${this.#status}, power: ${this.power}W`;
  }

  toggle() {
    if (this.#status === "on") {
      this.#status = "off";
    } else if (this.#status === "off") {
      this.#status = "on";
    } else {
      return "Some mistake happened";
    }
  }

  increasePower(amount) {
    if (amount > 0) {
      return (this.power += amount);
    } else {
      throw new Error("Amount must be positive");
    }
  }

  decreasePower(amount) {
    if (amount > 0 && this.power - amount >= 0) {
      return (this.power -= amount);
    } else {
      throw new Error("Invalid decrease amount");
    }
  }

  toString() {
    return `SmartDevice: ${this.name} (#${this.#id})`;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return this.name;
    } else if (hint === "number") {
      return this.power;
    } else {
      return this.Info;
    }
  }
}
