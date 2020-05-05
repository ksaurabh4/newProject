import Login from './models/Login';
import * as loginView from './views/loginViews';
import * as taskView from './views/taskViews';
import * as formValidate from './views/form-validate';
import { elements } from './views/dom-elements';
import Tasks from './models/Tasks';

const state = {};

//login User
const loginUser = async () => {
  const input = loginView.getInput();

  //validate the login form data
  const validate = formValidate.validateLoginFormData(input);
  if (validate === true) {
    //create the login session
    state.login = new Login(input.email.value, input.password.value);
    try {
      await state.login.loginAccount();
      const data = state.login.result.data;
      if (data.user) {
        loginView.clearScreen();
        loginView.renderLoginResult(data.user);
        return data.token;
      }
    } catch (error) {
      console.log(error);
    }
  }
};

//fetching the list of task
const getTask = async (token) => {
  try {
    state.tasks = new Tasks(token);
    await state.tasks.getTasks();
    const tasks = state.tasks.result.data;
    console.log(tasks);
    if (tasks.length > 0) {
      taskView.clearScreen();
      tasks.forEach((task) => taskView.renderTasks(task));
    }
  } catch (error) {
    console.log(error);
  }
};

//event listener on login button
const token = (async () => {
  elements.form.addEventListener('submit', async (e) => {
    e.preventDefault();
    //login user and render the homepage
    const token = await loginUser();
    //fetch task and render on homepage
    await getTask(token);
  });
})();
