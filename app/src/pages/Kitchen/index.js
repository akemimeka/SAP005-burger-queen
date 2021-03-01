/* eslint-disable object-curly-newline */
import React, { Fragment, useState } from 'react';
import Header from '../../components/Header';
import logo from '../../images/logo-horizontal-green.png';
import TotalAndSend from '../../components/TotalAndSend';
import OrdersCards from '../../components/OrdersCards';

export default function Kitchen() {
  const apiURL = 'https://lab-api-bq.herokuapp.com';
  const apiProducts = `${apiURL}/order`;
  const currentUserToken = localStorage.getItem('currentUserToken');
  const currentOrderId = localStorage.getItem('currentOrderId');
  const getTableNumber = localStorage.getItem('currentTable');
  const getClientName = localStorage.getItem('currentClient');
  const menuHeaderSubtitle = `Mesa ${getTableNumber} · ${getClientName}`;
  const [products, setProducts] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  const handleAllOrders = {
    method: 'GET',
    headers: { Authorization: currentUserToken },
    path: { orderID: currentOrderId },
  };

  fetch(apiProducts, handleAllOrders)
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.log(error));

  const filterByName = (list, name) => {
    const filteredItem = list.filter((item) => item.name === name || item.name.includes(name));
    console.log('selected item', filteredItem[0]);
    setSelectedItem(filteredItem[0]);
  };

  const onClickItem = (id) => {
    filterByName(products, id);
  };
  return (
    <Fragment>
      <div className='kitchen-grid-container'>
        <Header
          headerClass='header-base bg-color-light-brown'
          headerLogoLink='/cozinha'
          logoSrc={logo}
          workAreaClass='header-title-base color-lightest'
          workAreaText='Cozinha'
          divLogoutClass='align-right weight-500'
          workerRoleClass='header-role-base color-lightest'
          workerRoleText='Chef'
          workerNameClass='header-name-base color-lightest'
          buttonLogoutClass='button-logout-base bg-color-green color-lightest'
        />
        <section className='menu-grid-child todo-orders bg-color-yellow-20'>
          <h3 className='menu-section-title'>Pedidos Pendentes</h3>

          <OrdersCards
          />

        </section>

        <section className='menu-grid-child doing-orders bg-color-yellow-20'>
          <h3 className='menu-section-title'>Em Preparo</h3>
          <OrdersCards
          />
        </section>

        <section className='menu-grid-child done-orders bg-color-yellow-20'>
          <h3 className='menu-section-title'>Pedidos Concluídos</h3>
          <OrdersCards
          />
        </section>

      </div>
    </Fragment>
  );
}
