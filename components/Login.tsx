import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Formik } from "formik";
import { TextInput } from "@/components/formik/TextInput";

const defaultUser = {
  email: "",
  password: "",
};

const Login = () => {
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
          alert(JSON.stringify(values, null, 2));
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
            <TextInput type="email" name="email" label="Correo" />
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
