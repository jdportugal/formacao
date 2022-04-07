import React from "react";
import { useStopwatch } from "react-timer-hook";

function MyStopwatch() {
	const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
		useStopwatch({ autoStart: true });

	const valuePerSecond = 20 / 60 / 60;

	return (
		<div style={{ textAlign: "center" }}>
			<h1>Tempo (de formação) é dinheiro</h1>
			<div style={{ fontSize: "100px" }}>
				<span>{hours}h</span>:<span>{minutes}m</span>:<span>{seconds}s</span>
			</div>
			<div>
				<span>
					{(
						valuePerSecond * seconds +
						valuePerSecond * 60 * minutes +
						valuePerSecond * 60 * 60 * hours
					).toFixed(4) + " "}
					€
				</span>
			</div>
			<p>{isRunning ? "Running" : "Not running"}</p>
			<button onClick={start}>Start</button>
			<button onClick={pause}>Pause</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
}

export default function App() {
	return (
		<div>
			<MyStopwatch />
		</div>
	);
}
