import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import style from './App.module.css';
import heroImg from '../../assets/cart-1920-1079.jpg';
function App() {
	useEffect(() => {
		async function fetchData() {
			const data = await fetch('https://fakestoreapi.com/products')
				.then((response) => response.json())
				.then((data) => console.log(data));
			console.log(data);
		}
		// fetchData();
	}, []);
	return (
		<div className={style.home}>
			<NavBar />
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
		</div>
	);
}

export default App;
