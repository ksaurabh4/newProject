//create an account
import axios from 'axios';

export default class Create {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  async createAccount() {
    try {
      const res = await axios({
        method: 'post',
        url: 'https://kumar-task-manager-api.herokuapp.com/users/',
        data: {
          name: this.name,
          email: this.email,
          password: this.password,
        },
      });
      // fetch(
      //   'https://cors-anywhere.herokuapp.com/https://kumar-task-manager-api.herokuapp.com/users/',
      //   {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //       name: this.name,
      //       email: this.email,
      //       password: this.password,
      //     }),
      //   }
      // );
      this.result = res;
      console.log(this.result);
    } catch (error) {
      console.log(error);
    }
  }
}
