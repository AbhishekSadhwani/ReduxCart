import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png';
import './Header.css';

export const Header = () => {
  // accessing the value of cratList form store state
  const products = useSelector(state => state.cartState.cartList);
  return (
    <header>
      <Link to="/" className="heading">
        <img className= "logo" src={logo} alt="Shopping cart" />
        <span>Shopping Cart</span>
      </Link>
      <nav className='nav'>
        <ul className='nav-items'>
          <NavLink className="nav-link" to={"/"} end>Home</NavLink>
          <NavLink className="nav-link" to={"cart"}>Cart</NavLink>
        </ul>
      </nav>
      <Link className='cart' to="/cart">Cart: {products.length}</Link>
    </header>
  )
}
