import Chats from './Chats';
import styles from '../styles/Home.module.css';

export default function Home() {
	// // Generate user id
	// const [userId, setUserId] = useState('');
	// useEffect(() => {
	// 	setUserId(Math.floor(Math.random() * 1000000000));
	// }, []);

	return (
		<>
			<div className={styles.container}>
				<div className={styles.contacts}>
					<h1>Contacts</h1>
					<div className={styles.contact}>
						<div className={styles.circle}></div>
						<h3>John Doe</h3>
					</div>
					<div className={styles.contact}>
						<div className={styles.circle}></div>
						<h3>Jane Doe</h3>
					</div>
					<div className={styles.contact}>
						<div className={styles.circle}></div>
						<h3>Mark Gates</h3>
					</div>
				</div>
				<div className={styles.chats}>
					<Chats />
				</div>
			</div>
		</>
	)
}