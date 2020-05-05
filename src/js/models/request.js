//read the profile
const readAccount = (token, callback) => {
  fetch('https://kumar-task-manager-api.herokuapp.com/users/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

//logout the account
const logoutAccount = (token, callback) => {
  fetch('https://kumar-task-manager-api.herokuapp.com/users/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      callback(result);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
};

//logout all accounts
const logoutAllAccount = (token, callback) => {
  fetch('https://kumar-task-manager-api.herokuapp.com/users/logoutAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      callback(result);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
};
