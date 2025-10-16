class User {
  #password;

  static count = 0;

  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.#password = password;
  }

  login() {
    return `User ${this.username} logged in.`;
  }

  checkPassword(password) {
    return this.#password === password;
  }
}

class Admin extends User {
  constructor(username) {
    super(username);
  }

  deleteUser(user) {
    return `Admin ${this.username} deleted user ${user}.`;
  }
}

class Moderator extends User {
  constructor(username) {
    super(username);
  }

  banUser(user) {
    return `Moderator ${this.username} banned user ${user}.`;
  }
}

const u1 = new User("Dmytro", "dmytro@mail.com", "12435");
const admin = new Admin("Anna", "admin@mail.com", "root");
const mod = new Moderator("Max", "mod@mail.com", "pass");
