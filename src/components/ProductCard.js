import { useEffect, useState } from 'react';
// hooks to pass the actions to store and to access cartState data from store
import { useDispatch, useSelector } from 'react-redux';
// reducer actions from store
import { add, remove } from '../store/cartSlice.js';

// css
import './ProductCard.css';


export const ProductCard = ({product}) => {
  // creating a state variable to check if element is in cart or not
  const [isInCart, setIsInCart] = useState(false);

  // using the useDispatch hook to pass the action to store
  const dispatch = useDispatch();

  // accessing the state's cart list variable using useSelector hook
  const cartList = useSelector(state => state.cartState.cartList);

  // using useEffect hook to continuously check for the products if they are in cart 
  // passing the cartList as dependency so it will check whenever cartList is upodated
  useEffect(() => {
    const productInCart = cartList.find(cartItem => cartItem.id === product.id);
    if(productInCart){
      setIsInCart(true);
    }else{
      setIsInCart(false);
    }

  }, [cartList, product.id])  
  


  return (
    <div className="card">
        <img src={product.image} alt={product.image} />
        <p>{product.name}</p>
        <div className='info'>
            <span className='price'>${product.price}</span>
            { isInCart ? 
            (<button onClick={() => dispatch(remove(product))} className='remove-btn'>Remove</button>) : 
            (<button onClick={() => dispatch(add(product))} className='add-btn'>Add To Cart</button>)
            }
            
        </div>
    </div>
  )
}
