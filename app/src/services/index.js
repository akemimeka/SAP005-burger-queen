/* eslint-disable object-curly-newline */
import { useState } from 'react';

export const currentUserToken = localStorage.getItem('currentUserToken');
export const tableNumber = localStorage.getItem('currentTable');
export const clientName = localStorage.getItem('currentClient');
export const setLocalStorage = (key, value) => localStorage.setItem(key, value);

const apiURL = 'https://lab-api-bq.herokuapp.com';
export const apiProducts = `${apiURL}/products/`;
export const apiOrders = `${apiURL}/orders/`;
export const apiUsers = `${apiURL}/users`;

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

export const cleanTableAndClient = () => {
  localStorage.removeItem('currentTable');
  localStorage.removeItem('currentClient');
};

export const getRequestOptions = (token) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };

  return options;
};

export const putRequestOptions = (token, status) => {
  const options = {
    method: 'PUT',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST',
    },
    body: JSON.stringify({ status }),
  };

  return options;
};

export const GetHallWorkerName = (workerId) => {
  const apiGetUser = `${apiUsers}/${workerId}`;
  const [workerName, setWorkerName] = useState('');

  fetch(apiGetUser, getRequestOptions(currentUserToken))
    .then((response) => response.json())
    .then((worker) => setWorkerName(worker.name));

  return workerName;
};

export const GetAllOrders = (setAllOrders) => (
  fetch(apiOrders, getRequestOptions(currentUserToken))
    .then((response) => response.json())
    .then((data) => {
      const sortById = data.sort((itemA, itemB) => itemB.id - itemA.id);
      setAllOrders(sortById);
    })
);

export const UpdateOrderStatus = (index, id, status, allOrders, setAllOrders) => (
  fetch(`${apiOrders}${id}`, putRequestOptions(currentUserToken, status))
    .then((response) => response.json())
    .then(() => {
      const pendingOrdersList = [...allOrders];
      pendingOrdersList[index].status = status;
      setAllOrders(pendingOrdersList);
    })
);

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
