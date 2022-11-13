import { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
	const [isCartShown, setIsCartShown] = useState(false);

	const showCartHandler = () => {
		setIsCartShown(true);
	};

	const hideCartHandler = () => {
		setIsCartShown(false);
	};

	return (
		<Fragment>
			{isCartShown && <Cart onClose={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</Fragment>
	);
};

export default App;
