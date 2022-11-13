import { useContext } from "react";

import CartContext from "../../store/CartContext";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
	const cartContext = useContext(CartContext);

	const numberOfCartItems = cartContext.items.reduce(
		(currentNum, item) => currentNum + item.amount,
		0
	);

	return (
		<button className={styles.button} onClick={props.onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
