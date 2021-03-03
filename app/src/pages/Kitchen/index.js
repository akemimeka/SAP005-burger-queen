/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
import React, { Fragment, useState, useEffect } from 'react';
import Header from '../../components/Header';
import logo from '../../images/logo-horizontal-green.png';
import OrderCard from '../../components/OrdersCards';
import OrderProducts from '../../components/OrderProducts';

export default function Kitchen() {
  const apiURL = 'https://lab-api-bq.herokuapp.com';
  const apiOrders = `${apiURL}/orders/`;
  const currentUserToken = localStorage.getItem('currentUserToken');
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const getRequestOptions = {
      method: 'GET',
      headers: { Authorization: currentUserToken },
    };

    fetch(apiOrders, getRequestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAllOrders(data);
      })
      .catch((error) => console.log(error));
  }, [apiOrders, currentUserToken]);

  const handleOrderStatusUpdate = (index, orderId, orderStatus) => {
    const putRequestOptions = {
      method: 'PUT',
      headers: {
        Authorization: currentUserToken,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST',
      },
      body: JSON.stringify({ orderStatus }),
    };
    fetch(`${apiOrders}${orderId}`, putRequestOptions)
      .then((response) => response.json())
      .then((data) => {
        const pendingOrdersList = [...allOrders];
        pendingOrdersList[index].status = orderStatus;
        setAllOrders(pendingOrdersList);
        console.log(data);
      })
      .catch((error) => console.log(error));
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
          <h3 className='menu-section-title'>Pedidos</h3>
          <div className='all-orders-container'>
            {
              allOrders.map((order, index) => (
                <OrderCard
                  key={`order-${index}`}
                  orderNumber={order.id}
                  clientName={order.client_name}
                  workerId={order.user_id}
                  tableNumber={order.table}
                  orderStatus={order.status}
                  orderProcessed={order.processedAt}
                  orderCreatedAt={order.createdAt}
                  updatedAt={order.updatedAt}
                  orderProducts={order.products}
                  updateOrderToDoing={() => handleOrderStatusUpdate(index, order.id, 'processing')}
                  updateOrderToDone={() => handleOrderStatusUpdate(index, order.id, 'done')}
                >
                  {order.Products.map((product, idx) => (
                    <OrderProducts
                      key={`order-${index}-product-${idx}`}
                      name={product.name}
                      qtd={product.qtd}
                      flavor={product.flavor}
                      complement={product.complement}
                    />
                  ))}
                </OrderCard>
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
