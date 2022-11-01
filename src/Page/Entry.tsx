import {
  Alert,
  Backdrop,
  Button,
  CardMedia,
  FormHelperText,
  Grid,
  Input,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import Register from "../components/Register";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateUserInput } from "../generated/graphql-types";
import { CreateUserInputSchema } from "../utils/yup";
import { ErrorMessage } from "@hookform/error-message";
import Login from "../components/Login";
import CircularProgress from '@mui/material/CircularProgress';
import "../App.css";
import { useQuery } from "@apollo/client";
import { getClientLoading } from "../utils/common";


const Entry = () => {
  const [reg , setReg] = useState(true)
  const [open , setOpen] = useState(false)

  const { data, client } = useQuery(getClientLoading);
  console.log(data, client)

  const handleClose = () => {
    setOpen(!open)
  }
  return (
    <div className="entry">
    { reg ? <Register /> : <Login />}
    <Button onClick={() => setReg(!reg)}>{reg ? "go to login" : "go to register"} </Button>
    <Backdrop
        sx={{ color: '#ffff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Button onClick={() => handleClose()}>{"BackDrop"} </Button>

    </div>
  );
};

export default Entry;

