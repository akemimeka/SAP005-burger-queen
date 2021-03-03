/* eslint-disable object-curly-newline */
import React, { useState } from 'react';

export function GoToPage(history, path) {
  history.push(path);
}

export function navigateAfterLogin(history, role) {
  switch (role) {
    case 'hall':
      GoToPage(history, '/salao');
      break;
    case 'kitchen':
      GoToPage(history, '/cozinha');
      break;
    default:
      break;
  }
}

export const getCurrentUserToken = localStorage.getItem('currentUserToken');
export const getTableNumber = localStorage.getItem('currentTable');
export const getClientName = localStorage.getItem('currentClient');

export const cleanTableAndClient = () => {
  localStorage.removeItem('currentTable');
  localStorage.removeItem('currentClient');
};

const apiURL = 'https://lab-api-bq.herokuapp.com';
export const apiProducts = `${apiURL}/products/`;
export const apiOrders = `${apiURL}/orders/`;
export const apiUsers = `${apiURL}/users`;

export const GetHallWorkerName = (workerId) => {
  const apiGetUser = `${apiUsers}/${workerId}`;
  const [workerName, setWorkerName] = useState('');

  const getRequestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getCurrentUserToken,
    },
  };

  fetch(apiGetUser, getRequestOptions)
    .then((response) => response.json())
    .then((worker) => setWorkerName(worker.name))
    .catch((error) => console.log(error));

  return workerName;
};

export const ConvertDate = (apiDate) => {
  const date = new Date(apiDate);
  const correctDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;

  return correctDate;
};

export const ConvertTime = (apiDate) => {
  const date = new Date(apiDate);
  const correctTime = `${date.getHours()}:${date.getMinutes()}`;

  return correctTime;
};
