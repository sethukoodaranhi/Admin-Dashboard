import * as yup from "yup";
const addUserSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please enter a valid email address'),
    companyName: yup.string().required('Company name is required')
}).required();
export default addUserSchema;