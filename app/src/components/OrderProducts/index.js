/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';

export default function OrderProducts({
  name,
  flavor,
  complement,
  qtd,
}) {
  return (
    <Fragment>
      <div className='order-items-wrap'>
        <p className='order-items-quantity'>
          {qtd < 10 ? `0${qtd}` : qtd}
        </p>
        <div className='order-items-name'>
          {(name.includes('mL')
            && name.replace('mL', 'ml'))
            || <p>{name}</p>}
          {flavor && complement
            && <p><span className='capitalize'>{flavor}</span> + {complement}</p>}
          {flavor && !complement
            && <p><span className='capitalize'>{flavor}</span> - s/ extra</p>}
          {!flavor && ''}
        </div>
      </div>
    </Fragment>
  );
}
