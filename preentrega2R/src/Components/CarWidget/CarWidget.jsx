import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../Context';
import React from 'react';

const Carwidget = () => {
const {itemCount} = React.useContext(CartContext)

  return (
    <div>
<span><FontAwesomeIcon icon={faShoppingCart} /></span>
<span>{itemCount}</span>
    </div>
  )
}

export default Carwidget