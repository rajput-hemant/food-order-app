import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
	return (
		<form action="" className={styles.form}>
			<Input
				label="Amount"
				input={{
					id: "amount",
					type: "number",
					min: "1",
					max: "5",
					defaultValue: "1",
				}}
			/>
			<button>+ Add</button>
		</form>
	);
};

export default MealItemForm;
