import { useDispatch } from 'react-redux';
import {remove} from '../store/cartSlice.js';

import './CartCard.css';


export const CartCard = ({product}) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-card">
        <img src={product.image} alt="" />
        <p className='name'>{product.name}</p>
        <p className='price'>${product.price}</p>
        <button onClick={() => dispatch(remove(product))}>Remove</button>
    </div>
  )
}
