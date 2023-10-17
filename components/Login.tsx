import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Formik } from "formik";
import { TextInput } from "@/components/formik/TextInput";
import useSubmit from "@/hooks/useSubmit";
import { loginUser } from "@/services/loginUser";
import { IUserLogin } from "@/interfaces/User";

const defaultUser: IUserLogin = {
  username: "",
  password: "",
};

const Login = () => {
  const { isLoading, submit } = useSubmit({
    promise: loginUser,
    onSuccess(data) {
      alert(JSON.stringify(data));
    },
  });
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Formik
        initialValues={defaultUser}
        onSubmit={(values) => {
          submit(values);
        }}
      >
        {({ handleSubmit }) => (
          <Box
            component={"form"}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              maxWidth: "400px",
              gap: 2.5,
            }}
            onSubmit={handleSubmit}
          >
            <Typography
              textAlign={"center"}
              component="h1"
              variant="h2"
              sx={{
                fontWeight: "500",
                fontSize: "28px",
                mb: 1.5,
              }}
            >
              Login
            </Typography>
            <TextInput type="text" name="username" label="Usuario" />
            <TextInput type="password" name="password" label="Contraseña" />

            <Button variant="contained" sx={{ mt: 1 }} type="submit">
              Iniciar sesión
            </Button>
            <Button variant="text">Registrar nuevo usuario</Button>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
