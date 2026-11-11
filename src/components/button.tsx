import styles from "./button.module.css";

export const Button = (props: any) => {
	var buttonStyle = styles.buttonRegular;

	if (props.type == "symbol") {
		buttonStyle = styles.buttonSymbol;
	} else if (props.type == "equal") {
		buttonStyle = styles.buttonEqual;
	}

	return (
		<div
			className={`${styles.buttonContainer} ${buttonStyle}`}
			onClick={() => props.onClick(props.value)}
		>
			<p>{props.value}</p>
		</div>
	);
};
