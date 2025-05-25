import * as yup from "yup";
const editUserSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please enter a valid email address'),
}).required();
export default editUserSchema;