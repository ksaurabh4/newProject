import { elements } from '../models/dom-elements';

export const getInput = () => {
  return {
    username: elements.username,
    email: elements.email,
    password: elements.password,
    password2: elements.password2,
  };
};

export const clearScreen = () => {
  elements.body.innerHTML = '';
};

export const renderCreateForm = (user) => {
  const markup = `<form class="form" id="form">
    <h1>Register with us</h1>
    <div class="form-control">
      <label for="username">Username</label>
      <input type="text" placeholder="Enter username" id="username" />
      <small>Error Messege</small>
    </div>
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
    <div class="form-control">
      <label for="password2">Confirm Password</label>
      <input type="text" id="password2" placeholder="Confirm password" />
      <small>Error Messege</small>
    </div>
    <a id="switch-forms">Existing User click here to login</a>
    <button type="submit" id="create-btn">Create Account</button>

</form>`;
  elements.body.innerHTML = markup;
};
export const renderCreateResult = (user) => {
  const markup = `<p>Hello ${user.name}, You successfully created your account!</p>`;
  elements.body.innerHTML = markup;
};
