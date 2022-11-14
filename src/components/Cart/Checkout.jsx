import { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const Checkout = (props) => {
	const [formInputsValidity, setFormInputsValidity] = useState({
		name: true,
		street: true,
		postalCode: true,
		city: true,
	});

	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const postalInputRef = useRef();
	const cityInputRef = useRef();

	const isEmpty = (value) => value.trim() === "";
	const isFiveChars = (value) => value.trim().lenght === 5;

	const confirmHandler = (event) => {
		const enteredName = nameInputRef.current.value;
		const enteredStreet = nameInputRef.current.value;
		const enteredPostal = nameInputRef.current.value;
		const enteredCity = nameInputRef.current.value;
		event.preventDefault();

		const enteredNameValid = !isEmpty(enteredName);
		const enteredStreetValid = !isEmpty(enteredStreet);
		const enteredPostalValid = isFiveChars(enteredPostal);
		const enteredCityValid = !isEmpty(enteredCity);

		setFormInputsValidity({
			name: enteredNameValid,
			street: enteredStreetValid,
			postalCode: enteredPostalValid,
			city: enteredCityValid,
		});

		const formValid =
			enteredNameValid &&
			enteredStreetValid &&
			enteredPostalValid &&
			enteredCityValid;

		if (!formValid) return;
	};

	const nameCtrlStyles = `${styles.control} ${
		formInputsValidity.name ? "" : styles.invalid
	}`;
	const streetCtrlStyles = `${styles.control} ${
		formInputsValidity.street ? "" : styles.invalid
	}`;
	const postalCtrlStyles = `${styles.control} ${
		formInputsValidity.postalCode ? "" : styles.invalid
	}`;
	const cityCtrlStyles = `${styles.control} ${
		formInputsValidity.city ? "" : styles.invalid
	}`;

	return (
		<form className={nameCtrlStyles} onSubmit={confirmHandler}>
			<div className={styles.control}>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" ref={nameInputRef} />
				{!formInputsValidity.name && <p>Please enter a valid name.</p>}
			</div>
			<div className={streetCtrlStyles}>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" ref={streetInputRef} />
				{!formInputsValidity.street && <p>Please enter a valid street.</p>}
			</div>
			<div className={postalCtrlStyles}>
				<label htmlFor="postal">Postal Code</label>
				<input type="text" id="postal" ref={postalInputRef} />
				{!formInputsValidity.postalCode && (
					<p>Please enter a valid Postal Code (5 characters long).</p>
				)}
			</div>
			<div className={cityCtrlStyles}>
				<label htmlFor="city">City</label>
				<input type="text" id="city" ref={cityInputRef} />
				{!formInputsValidity.city && <p>Please enter a valid city.</p>}
			</div>
			<div className={styles.actions}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button className={styles.submit}>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
