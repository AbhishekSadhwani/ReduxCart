import { useSelector } from "react-redux";
import { useCustomTitle } from "../hooks/useCustomTitle"
import { CartCard } from "../components";
import './Cart.css';

export const Cart = ({title}) => {

  // setting custom title using useCustomTtitle hook
  useCustomTitle(title);

  /* 
    useSelector hook is used to acces the state values, 
    it takes a function which we call selector function,
    it takes the entire state of the store as argument and we can read the desired value and return it
  */
  const products = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);


  return (
    <main>
      <section>
        <div className="title">
          <p>Cart Items: {products.length}/ ${total}</p>
        </div>
        <div className="cart-cards">
          {products && products.map(product => (
            <CartCard key={product.id} product = {product}/>
          ))}
        </div>
      </section>
    </main>
  )
}
