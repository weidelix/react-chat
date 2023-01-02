import styles from '../styles/Chats.module.css';
import Bubble from '../components/Bubble';
import { useRef, useState, useEffect } from 'react';

export default function Chats() {
	// Generate GUID
	const [userId, setUserId] = useState('');
	useEffect(() => {
		setUserId(Math.floor(Math.random() * 1000000000));
	}, []);

	const [chats, setChats] = useState([]);
	const ref = useRef();
	return (
		<>
			<div className={styles.container}>
				<h1 className=''>
					User {userId}
				</h1>
				<div className={styles.chats}>
					{chats.map((chat, i) => <Bubble key={i} user={userId}>{chat}</Bubble>)}
				</div>
				<div className={styles.bar}>
					<input ref={ref} className={styles['message-box']} type="text" placeholder='Message'></input>
					<button onClick={() => setChats(oldChats => {
						if (ref.current.value === '') return oldChats;
						// ref.current.value = '';
						return [...oldChats, ref.current.value];
					})}
					>Send</button>
				</div>
			</div>
		</>
	);
}