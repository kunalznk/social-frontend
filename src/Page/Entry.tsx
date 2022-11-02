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
import Loader from "../components/Loader";


const Entry = () => {
  const [reg , setReg] = useState(true)
  return (
    <div className="entry">
    { reg ? <Register setReg={setReg}/> : <Login setReg={setReg}/>}
    </div>
  );
};

export default Entry;

