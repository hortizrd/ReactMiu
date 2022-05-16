import { useState, useEffect } from "react";
import BasicModal from "../../common/CommonButton/BasicModal/BasicModal";
import { Input } from "@mui/material";
import Box from "@mui/material/Box";
import { modalStyle } from "../../common/CommonButton/BasicModal/styles";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const NewUserModals = ({ open, onClose, addNewUser }) => {
  const defaultInputValues = {
    userId: "",
    email: "",
    phoneNumber: "",
  };
  const [values, setValues] = useState(defaultInputValues);

  const getContent = () => {
    return (
      <Box sx={modalStyle.inputFields}>
        <TextField
          placeholder="User ID"
          name="userId"
          label="User ID"
          required
          {...register("userId")}
          error={errors.userId ? true : false}
          helperText={errors.userId?.message}
          value={values.userId}
          onChange={(event) =>
            handleChange({ ...values, userId: event.target.value })
          }
        />
        <br></br>
        <TextField
          placeholder="Email"
          name="email"
          label="Email"
          required
          {...register("email")}
          error={errors.email ? true : false}
          helperText={errors.email?.message}
          value={values.email}
          onChange={(event) =>
            handleChange({ ...values, email: event.target.value })
          }
        />
        <br></br>
        <TextField
          placeholder="Phone number"
          name="phoneNumber"
          label="Phone number"
          required
          {...register("phoneNumber")}
          error={errors.phoneNumber ? true : false}
          helperText={errors.phoneNumber?.message}
          value={values.phoneNumber}
          onChange={(event) =>
            handleChange({ ...values, phoneNumber: event.target.value })
          }
        />
      </Box>
    );
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = yup.object().shape({
    userId: yup
      .string()
      .required("User ID is required")
      .min(6, "User ID must be at least 6 characters"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    phoneNumber: yup.string()
    .matches(phoneRegExp,'Phone number is not valid'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const addUser = (data) => {
     addNewUser(data);
   // console.log(data);
   
  };

  const handleChange = (value) => {
    setValues(value);
  };

  useEffect(() => {
    if (open) setValues(defaultInputValues);
  }, [open]);

  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title="New user"
      subTitle="Fill out puts and hit 'submit' button."
      content={getContent()}
      onSubmit={handleSubmit(addUser)}
    ></BasicModal>
  );
};

export default NewUserModals;
