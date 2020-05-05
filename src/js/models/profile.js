import { elements } from './dom-elements';

export const activateAccount = async (token, result) => {
  return { token, result };
};

console.log(activateAccount());

elements.readBtn.addEventListener('click', (e) => {
  e.preventDefault();
  readAccount(token, (result) => {
    console.log(result);
  });
});

elements.logoutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  logoutAccount(token, (result) => {
    console.log(result);
  });
});

elements.logoutAllBtn.addEventListener('click', (e) => {
  e.preventDefault();
  logoutAllAccount(token, (result) => {
    console.log(result);
  });
});
