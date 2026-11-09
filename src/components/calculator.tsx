import styles from "./calculator.module.css";
import { Button } from "./button";

export default function Calculator() {
	return (
		<div className={styles.calculatorContainer}>
			<h3>A Simple Calculator</h3>

			<div className={styles.calculatorScreen}>
				<div className={styles.calculatorInput}>
					<p>Test Equation</p>
				</div>
				<div className={styles.calculatorOutput}>
					<p>Test Results</p>
				</div>
			</div>

			<div className={styles.calculatorBody}>
				<div className={styles.calculatorButtons}>
					<Button label="%" />
					<Button label="CE" />
					<Button label="C" />
					<Button label="DELETE" />

					<Button label="1/x" />
					<Button label="x²" />
					<Button label="√" />
					<Button label="/" />

					<Button label="7" value={7} />
					<Button label="8" value={8} />
					<Button label="9" value={9} />
					<Button label="X" />

					<Button label="4" value={4} />
					<Button label="5" value={5} />
					<Button label="6" value={6} />
					<Button label="-" />

					<Button label="1" value={1} />
					<Button label="2" value={2} />
					<Button label="3" value={3} />
					<Button label="+" />

					<Button label="+/-" />
					<Button label="0" value={0} />
					<Button label="." />
					<Button label="=" />
				</div>
			</div>
		</div>
	);
}
