/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
import React, { Fragment, useState, useEffect } from 'react';
import Header from '../../components/Header';
import logo from '../../images/logo-horizontal-green.png';
import OrdersCards from '../../components/OrdersCards';

export default function Kitchen() {
  const apiURL = 'https://lab-api-bq.herokuapp.com';
  const currentUserToken = localStorage.getItem('currentUserToken');
  // const menuHeaderSubtitle = `Mesa ${getTableNumber} · ${getClientName}`;
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const apiOrders = `${apiURL}/orders`;
    const requestOptions = {
      method: 'GET',
      headers: { Authorization: currentUserToken },
    };

    fetch(apiOrders, requestOptions)
      .then((response) => response.json())
      .then((data) => setAllOrders(data))
      .catch((error) => console.log(error));
  }, [currentUserToken]);

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
          <div className='all-orders-container'>
            {
              allOrders.map((order, index) => (
                <OrdersCards
                  key={`order-${index}`}
                  cardHeaderClass='card-header'
                  cardBodyClass='card-body'
                  clientName={order.client_name}
                  tableNumber={order.table}
                  orderStatus={order.status}
                  orderCreatedAt={order.createdAt}
                  orderNumber={order.id}
                  atendente={order.user_id}
                  updatedAt={order.updatedAt}
                />
              ))
            }
          </div>

        </section>
        {/*
        <section className='menu-grid-child doing-orders bg-color-yellow-20'>
          <h3 className='menu-section-title'>Em Preparo</h3>
          <OrdersCards
          />
        </section>

        <section className='menu-grid-child done-orders bg-color-yellow-20'>
          <h3 className='menu-section-title'>Pedidos Concluídos</h3>
          <OrdersCards
          />
        </section> */}

      </div>
    </Fragment>
  );
}
