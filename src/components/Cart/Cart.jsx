import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import Checkout from "./Checkout";

const Cart = (props) => {
	const cartCtx = useContext(CartContext);
	const [isCheckout, setIsCheckout] = useState(false);

	const totalAmount = cartCtx.totalAmount.toFixed(2);
	const hasItems = cartCtx.items.length > 0;

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const orderHandler = () => {
		setIsCheckout(true);
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

	const modalActions = (
		<div className={styles.actions}>
			<button className={styles["button--alt"]} onClick={props.onClose}>
				Close
			</button>
			{hasItems && (
				<button className={styles.button} onClick={orderHandler}>
					Order
				</button>
			)}
		</div>
	);

	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && <Checkout onCancel={props.onClose} />}
			{isCheckout && modalActions}
		</Modal>
	);
};

export default Cart;
