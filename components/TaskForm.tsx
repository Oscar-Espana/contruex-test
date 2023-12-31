import { Box, Button, Drawer, Typography } from "@mui/material";
import { Formik } from "formik";
import React, { FC } from "react";
import { ITask } from "@/interfaces/Task";
import useSubmit from "@/hooks/useSubmit";
import { createTask } from "@/services/tasks/createTask";
import { updateTask } from "@/services/tasks/updateTask";
import { TextInput } from "./formik/TextInput";
import { CustomDateTimePicker } from "./formik/CustomDateTimePicker";
import { taskValidation } from "@/utils/validationSchema";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  taskSelected: ITask | undefined;
  onSuccessSavingTask: () => void;
}

const TaskForm: FC<Props> = ({
  isOpen,
  onClose,
  taskSelected,
  onSuccessSavingTask,
}) => {
  const defaultTask: ITask = {
    id: Date.now().toString(),
    title: "",
    description: "",
    dueDate: null,
  };

  const { submit } = useSubmit({
    promise: taskSelected ? updateTask : createTask,
    onSuccess() {
      onClose();
      onSuccessSavingTask();
    },
  });

  return (
    <Drawer
      sx={{
        width: 450,
        maxWidth: "80%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 450,
          maxWidth: "80%",
          boxSizing: "border-box",
          paddingY: "40px",
          paddingX: "24px",
        },
      }}
      anchor="right"
      open={isOpen}
      onClose={onClose}
    >
      <Formik
        initialValues={taskSelected || defaultTask}
        validationSchema={taskValidation}
        enableReinitialize
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
              {taskSelected ? "Editar tarea" : "Crear tarea"}
            </Typography>
            <TextInput fullWidth type="text" name="title" label="Título" />
            <TextInput
              fullWidth
              type="text"
              name="description"
              label="Descripción"
            />
            <CustomDateTimePicker label="Fecha" name="dueDate" />

            <Button variant="contained" sx={{ mt: 1 }} type="submit">
              Guardar
            </Button>
          </Box>
        )}
      </Formik>
    </Drawer>
  );
};

export default TaskForm;
