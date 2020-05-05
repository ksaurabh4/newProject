//login an account
import axios from 'axios';

export default class Login {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  async loginAccount() {
    try {
      const res = await axios({
        method: 'post',
        url: 'https://kumar-task-manager-api.herokuapp.com/users/login',
        data: {
          email: this.email,
          password: this.password,
        },
      });
      this.result = res;
      console.log(this.result);
    } catch (error) {
      console.log(error);
    }
  }
}
