import styles from '../styles/Bubble.module.css';

export default function Bubble(props) {
	return (
		<div style={{ margin: '2px' }}>
			<span className={styles.bubble}>
				<span className={styles.user}>{props.user}</span>
				{props.children}</span>
		</div>
	);
}