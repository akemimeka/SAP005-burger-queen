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

export const currentUserToken = localStorage.getItem('currentUserToken');
export const tableNumber = localStorage.getItem('currentTable');
export const clientName = localStorage.getItem('currentClient');
export const setLocalStorage = (key, value) => localStorage.setItem(key, value);

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
      Authorization: currentUserToken,
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
  let day = date.getDay();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (day < 10) { day = `0${day}`; }
  if (month < 10) { month = `0${month}`; }

  const correctDate = `${day}.${month}.${year}`;

  return correctDate;
};

export const ConvertTime = (apiDate) => {
  const date = new Date(apiDate);
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) { hours = `0${hours}`; }
  if (minutes < 10) { minutes = `0${minutes}`; }

  const correctTime = `${hours}:${minutes}`;

  return correctTime;
};
