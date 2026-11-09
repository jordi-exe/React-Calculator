import styles from "./button.module.css";

type ButtonProps = {
	label: string;
	value?: number;
};

export const Button = ({ label, value }: ButtonProps) => {
	const buttonValue = value;

	return (
		<div className={styles.buttonContainer}>
			<p>{label}</p>
		</div>
	);
};
