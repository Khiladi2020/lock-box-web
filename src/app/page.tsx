import styles from "./page.module.css";
import PasswordList from "../../Components/passwordList";
import MasterPassword from "./masterPassword/page";
 
 

export default function Home() {
	return (
		
			<div className={styles.page}>
				<h1>Lock Box Web App</h1>

				{/* <PasswordList /> */}
			 <MasterPassword/> 
			</div>
		 
	);
}
