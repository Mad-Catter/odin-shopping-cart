import App from './components/App/App';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Shop from './components/Shop/Shop';
import Checkout from './components/Checkout/Checkout';
const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'shop/:page',
		element: <Shop />,
	},
	{
		path: 'checkout',
		element: <Checkout />,
	},
];

export default routes;
