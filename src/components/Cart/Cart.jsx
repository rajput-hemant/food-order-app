import { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import CartContext from "../../store/CartContext";

const Cart = (props) => {
	const cartCtx = useContext(CartContext);

	const totalAmount = cartCtx.totalAmount.toFixed(2);
	const hasItems = cartCtx.items.length > 0;

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};
	
	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItems = (
		<ul className={styles["cart-items"]}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onAdd={cartItemAddHandler.bind(null, item)}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
				/>
			))}
		</ul>
	);

	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={styles.actions}>
				<button className={styles["button--alt"]} onClick={props.onClose}>
					Close
				</button>
				{hasItems && <button className={styles.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
