import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const updatedItems = state.items.concat(action.item);
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const addItemFromCartHandler = (item) => {
		dispatchCartAction({ type: "Add", item: item });
	};
	const removeItemFromCartHandler = (id) => {
		defaultCartState({ type: "REMOVE", id: id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemFromCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
