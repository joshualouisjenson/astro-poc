import './CounterReact.css';
import { count } from '../stores/count';
import { useStore } from '@nanostores/react';

export default function Counter({
	children
}: {
	children: JSX.Element;
}) {
	const $count = useStore(count);
	const add = () => count.set($count + 1);
	const subtract = () => count.set($count - 1);

	return (
		<>
			<div className="counter">
				<button onClick={subtract}>-</button>
				<pre>{$count}</pre>
				<button onClick={add}>+</button>
			</div>
			<div className="counter-message">{children}</div>
		</>
	);
}
