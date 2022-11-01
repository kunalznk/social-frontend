import * as yup from "yup";

const emailId = yup
  .string()
  .email("Please enter valid email id")
  .required()
  .min(5)
  .max(100);
const fullName = yup.string().required().min(5).max(100);
const password = yup
  .string()
  .required("Please Enter your password")
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})/,
  //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  // )
  .min(5)
  .max(100);
const profilePic = yup.string().required().min(8).max(1000);
const username = yup.string().required().min(5).max(100);

const title = yup.string().required().min(8).max(1000);
const content = yup.string().required().min(8).max(1000);
const mediaPath = yup.string().required().min(8).max(1000);
const mediaFormat = yup.string().required().min(1).max(30);
const tagUsers = yup.array().of(yup.number().min(1)).length(0);

export const CreateUserInputSchema = yup.object({
  fullName,
  username,
  emailId,
  password,
  profilePic,
});

export const LoginInputSchema = yup.object({
  username,
  password,
});

export const CreatePostInputSchema = yup.object({
  title,
  content,
  mediaPath,
  mediaFormat,
  tagUsers,
});
