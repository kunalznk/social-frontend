import {
  Button,
  FormHelperText,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Header = () => {
  return (
    <Paper>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        height={60}
      >
        <Grid item>Header</Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
