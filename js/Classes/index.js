class Hero {
  constructor(name = "hero", level = 1, health = 100, mana = 100) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.mana = mana;
    this.weapon = { type: "sword", damage: 5 };
  }

  attack() {
    console.log(
      `${this.name} attacks with ${this.weapon.type} and deals ${this.weapon.damage} damage`
    );
  }

  defend() {
    console.log(`${this.name} defends`);
  }

  heal(amount) {
    this.health += amount;
    console.log(
      `${this.name} heals for ${amount} points. Current health: ${this.health}`
    );
  }

  getDamage(value) {
    this.health -= value;
  }
}

const hero = new Hero("Aragorn", 10, 100, 50);

hero.getDamage(20);
hero.attack();
hero.defend();
hero.heal(15);
hero.getDamage(30);

console.log(hero);
