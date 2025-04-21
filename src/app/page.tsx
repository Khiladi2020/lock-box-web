import styles from "./page.module.css";
import PasswordList from "./passwordList/page";
import MasterPassword from "./masterPassword/page";
import {Box } from "@mui/material";
 

export default function Home() {
	return (
		
			<Box className={styles.page}>
				<h1>Lock Box Web App</h1>

				<PasswordList />
			 {/* <MasterPassword/>  */}
			</Box>
		 
	);
}
