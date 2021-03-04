/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
import React, { Fragment, useState, useEffect } from 'react';
import Header from '../../components/Header';
import logo from '../../images/logo-horizontal-green.png';
import OrdersCards from '../../components/OrdersCards';
// import OrdersCardsProducts from '../../components/OrdersCardsProducts';

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

  // const orderCreated = new Date(order.createdAt); //
  // const orderProcessing = new Date(order.updatedAt);
  // const dataResidual = Math.abs(orderProcessing) - orderCreated;
  // const orderFinished = Math.floor(dataResidual / 1000 / 60);

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

        // const timeToGetOrderDone = [...allOrders];
        // timeToGetOrderDone[index].updatedAt = updatedAt;

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
          <h3 className='menu-section-title'>Pedidos Pendentes</h3>
          <div className='all-orders-container'>
            {
              allOrders.map((order, index) => (
                <OrdersCards
                  key={`order-${index}`}
                  cardHeaderClass='orders-card-header'
                  cardBodyClass='orders-card-body'
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
                />
              ))
            }
          </div>
        </section>
      </div>
    </Fragment>
  );
}

// const orderCreated = new Date(order.createdAt) //
// const orderProcessing = new Date(order.updatedAt)
// const dataResidual = Math.abs(orderProcessing) - orderCreated
// const orderFinished = Math.floor(dataResidual / 1000 / 60)

// {
//   allOrders.map((order,index) => (
//     key=`order-${index}`
//     const orderCreated = new Date(order.createdAt) //
//     const orderProcessing = new Date(order.updatedAt)
//     const dataResidual = Math.abs(orderProcessing) - orderCreated
//     const orderFinished = Math.floor(dataResidual / 1000 / 60)

//   ))
// }
// <script>
// function myFunction() {
// var minutes = 1000 * 60;
// var hours = minutes * 60;
// var days = hours * 24;
// var years = days * 365;
// var d = new Date();
// var t= d.getTime();

// var y = Math.round(t / years);

// function printElapsedTime(fTest) {
//   let nStartTime = Date.now(),
//     vReturn = fTest(),
//     nEndTime = Date.now()

//   console.log(`Elapsed time: ${String(nEndTime - nStartTime)} milliseconds`)
//   return vReturn
// }

// let yourFunctionReturn = printElapsedTime(yourFunction)

//                                                Fluxo TimeToCook
// 1. Criar um map nos pedidos para pegar o tempo total para pegar o createdAt e o updatedAt;
// 2. Criar consts para fazer a alteração com o 'new Date' p/setar o tempo em createdAt e updateAt;
// 3. Criar o Math.abs p/ter o resultado absoluto das variáveis
// 4. Criar o Math.floor p/ter o resultado final ((dataResidual / 1000 / 60))
