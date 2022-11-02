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
import {
  useRegisterMutation,
  CreateUserInput,
} from "../generated/graphql-types";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PasswordIcon from "@mui/icons-material/Password";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ImageIcon from "@mui/icons-material/Image";
import { ChangeEvent, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateUserInputSchema } from "../utils/yup";
import SubmitButton from "./SubmitButton";
import { useQuery } from "@apollo/client";
import { getClientLoading } from "../utils/common";
import Loader from "./Loader";

const Register = (props : {setReg : React.Dispatch<React.SetStateAction<boolean>>}) => {
  const initialState = {
    fullName: "",
    username: "",
    emailId: "",
    password: "",
    profilePic: "",
  };

  const [registerForm, setRegisterForm] = useState(initialState);
  const {  data : clientData , client } = useQuery(getClientLoading);
  console.log(clientData , client)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    setFocus,
    clearErrors,
  } = useForm<CreateUserInput>({
    mode: "onChange",
    shouldFocusError: true,
    resolver: yupResolver(CreateUserInputSchema),
    defaultValues: initialState,
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  const [registerMutation, { data, loading, error }] = useRegisterMutation();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    console.log(error, "error");
  }

  const Register = async (input: CreateUserInput) => {
    
      const { data, errors } = await registerMutation({
        variables: {
          input,
        },
      });
      if (data?.register) {
        // reset Form
        reset(initialState);
        console.log(data?.register)
        props.setReg(false)
        // show login sucess aler
        // render Login
      } else {
        // show Error

      }
  
    
  };

  return (
    <Card elevation={10} style={{display:"flex" , justifyContent:"center" , flexDirection:"column", width:"500px" , minWidth:"318px", padding:22 }}>
      <Typography sx={{ textAlign: "center" , alignSelf:"center" }} variant="h4">
        {" "}
        Register{" "}
      </Typography>
      <form onSubmit={handleSubmit(async (data) => await Register(data))}>
        <Stack spacing={4} padding={2}>
          <TextField
            label="Full Name"
            value={registerForm.fullName}
            {...register("fullName")}
            onChange={(e) => {
              onChange(e);
            }}
            error={Boolean(errors.fullName)}
            helperText={
              errors.fullName?.message ? (
                <Alert severity="warning" sx={{ color: "bf1650" }}>
                  {errors.fullName?.message as unknown as string}
                </Alert>
              ) : null
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {Boolean(errors.fullName) ? (
                    <ErrorOutlineIcon className="face" sx={{ color: "red" }} />
                  ) : (
                    <PersonOutlineIcon />
                  )}
                </InputAdornment>
              ),
            }}
            FormHelperTextProps={{
              filled: false,
            }}
          ></TextField>
          <TextField
            label="Username"
            value={registerForm.username}
            {...register("username")}
            onChange={(e) => {
              onChange(e);
            }}
            error={Boolean(errors.username)}
            helperText={
              errors.username?.message ? (
                <Alert severity="warning" sx={{ color: "bf1650"  }}>
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
          ></TextField>
          <TextField
            label="Email"
            value={registerForm.emailId}
            {...register("emailId")}
            onChange={(e) => {
              onChange(e);
            }}
            error={Boolean(errors.emailId)}
            helperText={
              errors.emailId?.message ? (
                <Alert severity="warning" sx={{ color: "bf1650" }}>
                  {errors.emailId?.message as unknown as string}
                </Alert>
              ) : null
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {Boolean(errors.emailId) ? (
                    <ErrorOutlineIcon className="face" sx={{ color: "red" }} />
                  ) : (
                    <MailOutlineIcon />
                  )}
                </InputAdornment>
              ),
            }}
            FormHelperTextProps={{
              filled: false,
            }}
          ></TextField>
          <TextField
            label="Password"
            value={registerForm.password}
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
          <TextField
            label="Profile"
            value={registerForm.profilePic}
            {...register("profilePic")}
            onChange={(e) => {
              onChange(e);
            }}
            error={Boolean(errors.profilePic)}
            helperText={
              errors.profilePic?.message ? (
                <Alert severity="warning" sx={{ color: "bf1650" }}>
                  {errors.profilePic?.message as unknown as string}
                </Alert>
              ) : null
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {Boolean(errors.profilePic) ? (
                    <ErrorOutlineIcon className="face" sx={{ color: "red" }} />
                  ) : (
                    <ImageIcon />
                  )}
                </InputAdornment>
              ),
            }}
            FormHelperTextProps={{
              filled: false,
            }}
          ></TextField>
          <SubmitButton loading={loading} label={"Signup"}/>
        </Stack>
      </form>
      <p style={{alignSelf:"center"}}>have an account <b onClick={() => props.setReg(false)} style={{color:"rgba(0 , 149 ,246)" , cursor:"pointer"}}> Log in</b></p>
    </Card>
  );
};

export default Register;
