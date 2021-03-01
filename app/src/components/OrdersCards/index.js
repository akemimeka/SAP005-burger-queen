/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';

export default function OrdersCards({
  cardHeaderClass,
  cardBodyClass,
  clientName,
  tableNumber,
  orderStatus,
  orderCreatedAt,
}) {
  return (
    <Fragment>
      <div className='orders-cards-wrap'>
        <span className={cardHeaderClass}>
          <p className={cardBodyClass}>Cliente: {clientName}</p>
          <p className={cardBodyClass}>Mesa: {tableNumber}</p>
        </span>
        <span className={cardBodyClass}>
          <p className={cardBodyClass}>Status: {orderStatus}</p>
          <p className={cardBodyClass}>CreatedAt: {orderCreatedAt}</p>
        </span>
      </div>
    </Fragment >
  );
}

// {/* <img
//           className='menu-item-image'
//           src={menuItemSrc}
//           alt={menuItemDescription}
//         /> */ }
