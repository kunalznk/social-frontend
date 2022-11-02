import {
  Button,
  Card,
  Divider,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  MenuList,
  Paper,
  Popper,
  TextField,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import { useState } from "react";
import { logOut } from "../utils/common";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

  return (
    <Paper>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        height={60}
      >
        <Grid item>Headers</Grid>
        <Grid item sx={{marginRight:"1%"}}>
          <IconButton onClick={handleClick}>
            <DehazeRoundedIcon />
          </IconButton>
          <MoreOption id={id} open={open} anchorEl={anchorEl}/>
      </Grid>
      </Grid>
      </Paper>
  );
};

const MoreOption = (props : any) => {
  return (
    <Popper id={props.id} open={props.open} anchorEl={props.anchorEl}
    
    >
    <Paper sx={{height:238 , width:220 }} elevation={12}>
    <MenuList>
      <ListItem>
        <ListItemButton sx={{
          fontSize:16,
          fontWeight:400
        }}>
          acount Security
        </ListItemButton>
      </ListItem>
      <Divider variant="fullWidth" component="li" light={false} />
      <ListItem>
        <ListItemButton sx={{
          fontSize:16,
          fontWeight:400
        }}
        onClick={() => {
          logOut();
          window.location.href = "/"
        }}
        >
        Log out
        </ListItemButton>
      </ListItem>
    </MenuList>
  </Paper>
      </Popper>
  )
        
}
export default Header;
