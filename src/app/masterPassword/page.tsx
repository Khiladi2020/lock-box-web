//import styles from "./page.module.css";
import Button from "@mui/material/Button"
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box } from "@mui/material";


export default function MasterPassword() {
  return (
    <div className="master">
      <h1>Enter Master Password</h1>
    

    
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            //type={showPassword ? 'text' : 'password'}
            type = "password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  //aria-label= {showPassword ? 'hide the password' : 'display the password' }
                  //onClick={handleClickShowPassword}
                  //onMouseDown={handleMouseDownPassword}
                  //onMouseUp={handleMouseUpPassword}
                  //edge="end"
                >
                  {1 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
       <Box bgcolor={"red"}>
        
        <Button fullWidth  variant="outlined">Confirm</Button> 

       </Box>
    </div>
  );
}


