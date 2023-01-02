import Chats from './Chats';
import styles from '../styles/Home.module.css';

export default function Home() { 
 return (
   <>
		 <div className={styles.container}>
			 <div className={styles.contacts}>sdf</div>
				<div className={styles.chats}>
					<Chats/>
				</div>
		 </div>
   </>
 )
}