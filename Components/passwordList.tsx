import React from "react"; // Add this import
import {
	Box,
	List,
	ListItem,
	ListItemText,
	TextField,
	IconButton,
	Typography,
	Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const passwords = [
	{ title: "okpass", subtitle: "kapil" },
	{ title: "newway", subtitle: "kapil" },
	{ title: "jasjsbsb", subtitle: "" },
	{ title: "Hi Kapil Hacker", subtitle: "your account has been hacked" },
	{ title: "hello", subtitle: "we" },
	{
		title: "did CCTV can can Kapil Kumar Rohan Amit Singh khurana singh",
		subtitle: "",
	},
];

export default function PasswordList() {
	return (
		<Box
			maxWidth={400}
			marginX="auto"
			marginy={4}
			padding={2}
			bgcolor="#121212"
			color="white"
			borderRadius={2}
		>
			{/* Search bar */}
			<Box display="flex" alignItems="center" marginBottom={2} > 
				<TextField
					fullWidth
					variant="outlined"
					placeholder="Search passwords..."
          InputProps={{
          style:{ color: "white" },
          }}  
					style={{
						backgroundColor: "#1e1e1e",
						borderRadius: 8	}}
				/>
				<IconButton style={{ marginLeft: -40 }}>
					<SearchIcon style={{ color: "white" }} />
				</IconButton>
			</Box>

			{/* Password List */}
			<List>
				{passwords.map((item, index) => (
					<React.Fragment key={index}>
						<ListItem
							style={{ backgroundColor: "#1e1e1e", borderRadius: 8, marginBottom: 8 }}
						>
							<ListItemText
								primary={
									<Typography
										variant="body1"
											color="white"
											fontWeight="bold"
									>
										{item.title}
									</Typography>
								}
								secondary={
									<Typography
										variant="body2"
										color="gray"
									>
										{item.subtitle}
									</Typography>
								}
							/>
						</ListItem>
						{index < passwords.length - 1 && (
							<Divider style={{ backgroundColor: "gray" }} />
						)}
					</React.Fragment>
				))}
			</List>

			{/* Add Button */}
			<Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
				<IconButton
					style={{
						backgroundColor:"purple",
						color: "white",
						padding: 16,
						borderRadius: "50%",
					}}
				>
					<AddIcon />
				</IconButton>
			</Box>
		</Box>
	);
}
