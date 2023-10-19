import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { useField } from "formik";
import { InputLabel, SxProps, Theme, Box } from "@mui/material";
import {
  LocalizationProvider,
  MobileDateTimePicker,
  MobileDateTimePickerProps,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface Props extends Omit<MobileDateTimePickerProps<any>, "label" | "name"> {
  label: string;
  name: string;
}

export const CustomDateTimePicker = ({ label, ...props }: Props) => {
  const [field, meta, helper] = useField(props.name);

  const valueFormated = field.value ? dayjs(field.value) : null;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <InputLabel shrink htmlFor={props.name}>
          {label}
        </InputLabel>
        <MobileDateTimePicker
          slotProps={{
            textField: {
              error: meta.touched && Boolean(meta.error),
              helperText: meta.touched && meta.error,
            },
          }}
          views={["year", "month", "day", "hours", "minutes"]}
          format={"YYYY/MM/DD HH:mm"}
          {...field}
          {...props}
          value={valueFormated}
          onChange={(value: Dayjs | null) => {
            helper.setValue(value);
          }}
        />
      </Box>
    </LocalizationProvider>
  );
};
