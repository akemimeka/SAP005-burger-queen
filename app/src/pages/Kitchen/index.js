/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
import React, { Fragment, useState, useEffect } from 'react';
import { GetAllOrders, UpdateOrderStatus } from '../../services';
import Header from '../../components/Header';
import logo from '../../images/logo-horizontal-green.png';
import OrderCard from '../../components/OrderCard';
import OrderProducts from '../../components/OrderProducts';

export default function Kitchen() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    GetAllOrders(setAllOrders);
  }, []);

  return (
    <Fragment>
      <Header
        headerClass='header-base bg-color-light-brown'
        headerLogoLink='/cozinha'
        logoSrc={logo}
        workAreaClass='header-title-base color-lightest'
        workAreaText='Cozinha • Pedidos'
        divLogoutClass='align-right weight-500'
        workerRoleClass='header-role-base color-lightest'
        workerRoleText='Chef'
        workerNameClass='header-name-base color-lightest'
        buttonLogoutClass='button-logout-base bg-color-green color-lightest'
      />
      <main className='main-container-kitchen'>
        <section className='all-orders-container'>
          {allOrders.map((order, index) => (
            (order.status === 'pending' || order.status === 'processing')
            && <OrderCard
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
              updateOrderToProcessing={() => UpdateOrderStatus(index, order.id, 'processing', allOrders, setAllOrders)}
              updateOrderToReady={() => UpdateOrderStatus(index, order.id, 'ready', allOrders, setAllOrders)}
            >
              {order.Products.map((product, productIndex) => (
                <OrderProducts
                  key={`${order.id}-item-${productIndex}`}
                  name={product.name}
                  qtd={product.qtd}
                  flavor={product.flavor}
                  complement={product.complement}
                />
              ))}
            </OrderCard>
          ))}
        </section>
      </main>
    </Fragment>
  );
}
