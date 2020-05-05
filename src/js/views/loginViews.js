import { elements } from './dom-elements';

//get input from the login form
export const getInput = () => {
  return {
    email: elements.email,
    password: elements.password,
  };
};

//clear the login form
export const clearScreen = () => {
  elements.body.innerHTML = '';
};

//render login page
export const renderLoginForm = (user) => {
  const markup = `<form class="form" id="form">

    <h1>Login</h1>
    <div class="form-control">
      <label for="email">Email</label>
      <input type="text" id="email" placeholder="Enter Email" />
      <small>Error Messege</small>
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter password" />
      <small>Error Messege</small>
    </div>
    <a id="switch-forms">click to create new account</a>
    <button type="submit" id="login-btn">Login</button>
</form>`;
  elements.body.insertAdjacentHTML('beforeend', markup);
};

// render the homepage
export const renderLoginResult = (user) => {
  const markup = `<div class="after-login"><h1>Homepage</h1><p>Hello ${user.name}, You successfully logged in your account!</p>
  <button class="btn" id="logout-button">Logout</button><button class="btn" id="getProfile">Profile</button>
  <div class="task-container" id="task-container"><h2>Your Task List</h2><button class="btn" id="get-task-btn"> Click to get your tasks</button><div class="tasks" id="tasks"></div></div></div>`;
  elements.body.innerHTML = markup;
};
