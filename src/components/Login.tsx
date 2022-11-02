import {
  Button,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Alert,
  CardMedia,
  Input,
  InputAdornment,
  Stack,
  Typography,
  CircularProgress,
  Card,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { LoginInput, useLoginMutation } from "../generated/graphql-types";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import { ChangeEvent, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginInputSchema } from "../utils/yup";
import SubmitButton from "./SubmitButton";
import { getClientLoading } from "../utils/common";
import { useQuery } from "@apollo/client";
import { Navigate, useNavigate } from "react-router-dom";
const Login = (props : {setReg : React.Dispatch<React.SetStateAction<boolean>>}) => {

  const navigate = useNavigate()
  const initialState = {
    username: "",
    password: "",
  };

  const [loginForm, setLoginForm] = useState(initialState);

  const { data:LOAD, client } = useQuery(getClientLoading);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginInput>({
    mode: "onBlur",
    resolver: yupResolver(LoginInputSchema),
    defaultValues: initialState,
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };
  const [LoginMutation, { data, loading, error }] = useLoginMutation();

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    console.log(error, "error");
  }

  const Login = async (input: LoginInput) => {
    console.log("input", input);
    const { data, errors } = await LoginMutation({
      variables: {
        input,
      },
    });

    console.log(data , errors , "eerrr")

    if(data?.login!) {
      localStorage.setItem("token", data?.login!);
      navigate("/home")
    } 
    if(errors) {
      console.log(errors)
    }
  };

  return (
    <Card elevation={10} style={{display:"flex" , justifyContent:"center" , flexDirection:"column", width:"500px" ,minWidth:"318px", padding:22 }} >
      <Typography sx={{ textAlign: "center" }} variant="h4">
        {" "}
        Login{" "}
      </Typography>
      <form onSubmit={handleSubmit(async (data) => await Login(data))}>
        <Stack spacing={4} padding={2}>
          <TextField
            label={"Username"}
            value={loginForm.username}
            {...register("username")}
            onChange={(e) => {
              onChange(e);
            }}
            error={Boolean(errors.username)}
            helperText={
              errors.username?.message ? (
                <Alert severity="warning" sx={{ color: "bf1650" }}>
                  {errors.username?.message as unknown as string}
                </Alert>
              ) : null
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {Boolean(errors.username) ? (
                    <ErrorOutlineIcon className="face" sx={{ color: "red" }} />
                  ) : (
                    <AccountCircleIcon />
                  )}
                </InputAdornment>
              ),
            }}
            FormHelperTextProps={{
              filled: false,
            }}
          />
          <TextField
            label="Password"
            value={loginForm.password}
            {...register("password")}
            onChange={(e) => {
              onChange(e);
            }}
            error={Boolean(errors.password)}
            helperText={
              errors.password?.message ? (
                <Alert severity="warning" sx={{ color: "bf1650" }}>
                  {errors.password?.message as unknown as string}
                </Alert>
              ) : null
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {Boolean(errors.password) ? (
                    <ErrorOutlineIcon className="face" sx={{ color: "red" }} />
                  ) : (
                    <PasswordIcon />
                  )}
                </InputAdornment>
              ),
              type: "password",
            }}
            FormHelperTextProps={{
              filled: false,
            }}
          ></TextField>
          <SubmitButton loading={loading} label={"Login"}/>
        </Stack>
      </form>
      <p style={{alignSelf:"center"}}>Don't have an account? <b onClick={() => props.setReg(true)} style={{color:"rgba(0 , 149 ,246)" , cursor:"pointer"}}> Sign up</b></p>
    </Card>
  );
};

export default Login;
