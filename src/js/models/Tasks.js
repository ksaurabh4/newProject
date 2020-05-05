//tasks fetch and generate
import axios from 'axios';

export default class Task {
  constructor(token, description, status) {
    this.token = token;
    this.description = description;
    this.status = status;
  }

  async createTask() {
    try {
      const res = await axios({
        method: 'post',
        url: 'https://kumar-task-manager-api.herokuapp.com/tasks',
        data: {
          description: this.description,
          completed: this.status,
        },
        headers: { Authorization: `Bearer ${this.token}` },
      });
      this.result = res;
      console.log(this.result);
    } catch (error) {
      console.log(error);
    }
  }
  async getTasks() {
    try {
      const res = await axios({
        method: 'get',
        url: 'https://kumar-task-manager-api.herokuapp.com/tasks',
        headers: { Authorization: `Bearer ${this.token}` },
      });
      console.log(res);
      this.result = res;
    } catch (error) {
      console.log(error);
    }
  }
}
