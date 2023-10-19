import * as Yup from "yup";

export const userValidation = Yup.object({
  username: Yup.string().required("Usuario es requerido"),
  password: Yup.string()
    .min(4, "Contraseña debe de ser de al menos 4 caracteres")
    .required("Contraseña es requerida"),
});

export const taskValidation = Yup.object({
  title: Yup.string().required("Título es requerido"),
  description: Yup.string().required("Descripción es requerida"),
  dueDate: Yup.date().required("Fecha vencimiento es requerido"),
});
