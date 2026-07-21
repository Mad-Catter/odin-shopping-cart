import { useRef } from 'react';
import star from '../../assets/star-svgrepo-com.svg';
import style from './Card.module.css';
export default function Card({ product, cart, setCart }) {
	// Todo: being sent to new page for the item.
	// Button needs to change depending on if there are any of the item in the cart.
	// Should there be two different functions to adding to cart?
	//   One for the regular button and another one for increasing quantity so that the user cant accidently add multiple items by clicking very quickly?
	// A loading screen should show up inbetween adding items.
	function addToCart() {
		setCart((previousCart) => ({
			...previousCart,
			[product.id]: {
				product,
				quantity: 1,
			},
		}));
	}
	return (
		<div className={style.card}>
			<div className={style.imageWrapper}>
				<span className={style.starRating}>
					{product.rating.rate}
					<img src={star} alt="stars" />
				</span>
				<img src={product.image} alt={product.title} />
			</div>
			<h3>{product.title}</h3>
			<p>{product.price}$</p>
			<button type="button" onClick={addToCart}>
				Add To Cart
			</button>
		</div>
	);
}
