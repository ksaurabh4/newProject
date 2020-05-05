import { elements } from './dom-elements';

export const clearScreen = () => {
  elements.tasks.innerHTML = '';
};

export const renderTasks = (task) => {
  const markup = `<div>${task}</div>`;
  console.log(elements.tasks);
  elements.tasks.insertAdjacentHTML('afterbegin', markup);
};
