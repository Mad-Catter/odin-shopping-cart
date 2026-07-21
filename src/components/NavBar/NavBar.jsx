import { Link } from 'react-router';
import style from './NavBar.module.css';
export default function NavBar({ cart }) {
	let cartCount = 0;
	for (const value of Object.values(cart)) {
		if (value.quantity) cartCount += Number(value.quantity);
	}
	return (
		<>
			{/* navbarGap exists so that the fixed header does not cover any content. */}
			<div className={style.navBar}>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/shop/0">Shop</Link>
					<Link to="/checkout">Checkout</Link>
					<p className={style.testNum}>{cartCount}</p>
				</nav>
			</div>
			<div className={style.navBarGap}></div>
		</>
	);
}
