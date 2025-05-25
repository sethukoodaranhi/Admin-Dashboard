import * as yup from "yup";
const loginSchema=yup.object({
    username:yup.string().required("Username is required"),
    password:yup.string().required("Password is required")
}).required();
export default loginSchema;