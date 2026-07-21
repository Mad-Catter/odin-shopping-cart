import style from './Home.module.css';
import heroImg from '../../assets/cart-1920-1079.jpg';
import { useOutletContext } from 'react-router';
import Card from '../Card/Card';

export default function Home() {
	const testObject = {
		id: 1,
		title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
		price: 109.95,
		description:
			'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
		category: "men's clothing",
		image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
		rating: {
			rate: 3.9,
			count: 120,
		},
	};
	const [cart, setCart] = useOutletContext();
	return (
		<div className={style.home}>
			<h1>Totally Real Store!</h1>
			<div className={style.heroDiv}>
				<div className={style.heroWrapper}>
					<img src={heroImg} alt="Our Store" className={style.heroImg} />
				</div>
				<div className={style.heroText}>
					<h2>We sell lots of things</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta reprehenderit deserunt quidem, dolores cumque
						aliquid molestiae aliquam neque ea deleniti molestias nihil voluptate vero atque est corporis excepturi.
						Inventore, dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas atque accusantium
						quae eius blanditiis? Pariatur harum consequuntur adipisci perspiciatis, quisquam cupiditate nisi velit
						inventore reprehenderit a nobis commodi alias libero?
					</p>
				</div>
			</div>
			<div className={style.popularItems}>
				<h2>Here are some popular items at our Totally Real Store:</h2>
				<div className={style.itemsContainer}>
					<Card product={testObject} cart={cart} setCart={setCart}></Card>
				</div>
			</div>
		</div>
	);
}
