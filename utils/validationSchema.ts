import * as Yup from "yup";

export const userValidation = Yup.object({
  username: Yup.string().required("Usuario es requerido"),
  password: Yup.string()
    .min(4, "Contraseña debe de ser de al menos 4 caracteres")
    .required("Contraseña es requerida"),
});
