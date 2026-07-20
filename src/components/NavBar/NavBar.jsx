import { Link } from 'react-router';
import style from './NavBar.module.css';
export default function NavBar() {
	return (
		<div className={style.navBar}>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/shop/0">Shop</Link>
				<Link to="/checkout">Checkout</Link>
			</nav>
		</div>
	);
}
