import React from "react"; // Add this import
import { Box, List, ListItem, ListItemText, TextField, IconButton, Typography, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const passwords = [
  { title: "okpass", subtitle: "kapil" },
  { title: "newway", subtitle: "kapil" },
  { title: "jasjsbsb", subtitle: "" },
  { title: "Hi Kapil Hacker", subtitle: "your account has been hacked" },
  { title: "hello", subtitle: "we" },
  { title: "did CCTV can can Kapil Kumar Rohan Amit Singh khurana singh", subtitle: "" },
];

export default function PasswordList() {
  return (
    <Box maxWidth={400} sx={{ maxWidth: 400, mx: "auto", my: 4, p: 2, bgcolor: "#121212", color: "white", borderRadius: 2 }}>
      {/* Search bar */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search passwords..."
          sx={{ input: { color: "white" }, bgcolor: "#1e1e1e", borderRadius: 1 }}
        />
        <IconButton sx={{ ml: -5 }}>
          <SearchIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>

      {/* Password List */}
      <List>
        {passwords.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem sx={{ bgcolor: "#1e1e1e", borderRadius: 1, mb: 1 }}>
              <ListItemText
                primary={
                  <Typography variant="body1" sx={{ color: "white", fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    {item.subtitle}
                  </Typography>
                }
              />
            </ListItem>
            {index < passwords.length - 1 && <Divider sx={{ bgcolor: "gray" }} />}
          </React.Fragment>
        ))}
      </List>

      {/* Add Button */}
      <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
        <IconButton sx={{ bgcolor: "purple", color: "white", p: 2, borderRadius: "50%" }}>
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
}



 