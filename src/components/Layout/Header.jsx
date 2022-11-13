import { Fragment } from "react";

import styles from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
	return (
		<Fragment>
			<header className={styles.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			<div className={styles["main-image"]}>
				<img src={mealsImg} alt="A table full of food!" />
			</div>
		</Fragment>
	);
};

export default Header;
