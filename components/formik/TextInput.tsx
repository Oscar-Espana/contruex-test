import { useField } from "formik";
import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

interface Props extends Omit<TextFieldProps, "label" | "name"> {
  label: string;
  name: string;
}

export const TextInput = (props: Props) => {
  const [field, meta] = useField(props.name);

  return (
    <TextField
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      {...field}
      {...props}
    />
  );
};
