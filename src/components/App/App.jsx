import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import NavBar from '../NavBar/NavBar';

function App() {
	const [cart, setCart] = useState({});
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
		<>
			<NavBar cart={cart} />
			<Outlet context={[cart, setCart]} />
		</>
	);
}

export default App;
