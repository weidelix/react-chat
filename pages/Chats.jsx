 import styles from '../styles/Chats.module.css';
 
 export default function Chats() {
	return (
		<>
		<div className={styles.container}>

			<div className={styles.chats}></div>
			<div className={styles.bar}>
				<input className={styles['message-box']} type="text"></input>
				<button>Send</button>
			</div>
		</div>
		</>
	);
 }