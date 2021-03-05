/* eslint-disable object-curly-newline */
import React, { Fragment, useState, useEffect } from 'react';
import { GetAllOrders, UpdateOrderStatus } from '../../services';
import OrderCard from '../../components/OrderCard';
import OrderProducts from '../../components/OrderProducts';

export default function HallOrders() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    GetAllOrders(setAllOrders);
  }, []);

  return (
    <Fragment>
      {allOrders.map((order, index) => (
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
    </Fragment>
  );
}
