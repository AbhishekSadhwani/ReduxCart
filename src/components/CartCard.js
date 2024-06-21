import { useDispatch } from 'react-redux';
import {remove} from '../store/cartSlice.js';

import './CartCard.css';


export const CartCard = ({product}) => {

  // using useDispatch hook to get hold of dispatch which will dispatch the action called from component to store
  const dispatch = useDispatch();

  return (
    <div className="cart-card">
        <img src={product.image} alt="" />
        <p className='name'>{product.name}</p>
        <p className='price'>${product.price}</p>
        
        {/* calling the remove action */}
        <button onClick={() => dispatch(remove(product))}>Remove</button>
    </div>
  )
}
