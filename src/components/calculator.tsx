import styles from "./calculator.module.css";
import { Button } from "./button";
import { useEffect, useState } from "react";

export default function Calculator() {
	const [prevDisplay, setPrevDisplay] = useState(null);
	const [nextDisplay, setNextDisplay] = useState("0");
	const [operator, setOperator] = useState(null);

	useEffect(() => {}, [operator, nextDisplay, prevDisplay]);

	return (
		<div className={styles.calculatorContainer}>
			<h3>A Simple Calculator</h3>

			<div className={styles.calculatorScreen}>
				<div className={styles.calculatorInput}>
					<p>{prevDisplay}</p>
				</div>
				<div className={styles.calculatorOutput}>
					<p>{nextDisplay}</p>
				</div>
			</div>

			<div className={styles.calculatorBody}>
				<div className={styles.calculatorButtons}>
					<Button value="%" type="symbol" />
					<Button value="CE" type="symbol" />
					<Button value="C" type="symbol" />
					<Button value="DEL" type="symbol" />

					<Button value="¹/&#120013;" type="symbol" />
					<Button value="&#120013;²" type="symbol" />
					<Button value="²√&#120013;" type="symbol" />
					<Button value="&divide;" type="symbol" />

					<Button value={7} type="regular" />
					<Button value={8} type="regular" />
					<Button value={9} type="regular" />
					<Button value="&#10005;" type="symbol" />

					<Button value={4} type="regular" />
					<Button value={5} type="regular" />
					<Button value={6} type="regular" />
					<Button value="&ndash;" type="symbol" />

					<Button value={1} type="regular" />
					<Button value={2} type="regular" />
					<Button value={3} type="regular" />
					<Button value="+" type="symbol" />

					<Button value="⁺/₋" type="regular" />
					<Button value={0} type="regular" />
					<Button value="." type="regular" />
					<Button value="=" type="equal" />
				</div>
			</div>
		</div>
	);
}
