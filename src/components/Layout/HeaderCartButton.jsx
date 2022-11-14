import { useContext, useEffect, useState } from "react";

import CartContext from "../../store/CartContext";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
	const cartContext = useContext(CartContext);

	const { items } = cartContext;

	const numberOfCartItems = items.reduce(
		(currentNum, item) => currentNum + item.amount,
		0
	);

	const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

	useEffect(() => {
		if (items.length === 0) return;
		setBtnIsHighlighted(true);

		const timer = setTimeout(() => setBtnIsHighlighted(false), 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
