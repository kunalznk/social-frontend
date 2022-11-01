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
const Login = () => {
  const initialState = {
    username: "",
    password: "",
  };

  const [loginForm, setLoginForm] = useState(initialState);

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
    localStorage.setItem("token", data?.login!);
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
    </Card>
  );
};

export default Login;
