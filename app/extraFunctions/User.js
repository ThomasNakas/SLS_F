


class User {
    constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.login = false;
    }
  
    toJSON() {
      return {
        name: this.name,
        email: this.email,
        password: this.password,
        login: this.login
      };
    }
  }
  
  module.exports = User;