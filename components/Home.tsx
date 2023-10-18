import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import TasksDatagrid from "./TasksDatagrid";
import { useFetch } from "@/hooks/useFetch";
import { ITask } from "@/interfaces/Task";
import TaskForm from "./TaskForm";

const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [taskSelected, setTaskSelected] = useState<ITask | undefined>(
    undefined
  );

  const { data, isLoading, reload } = useFetch<ITask[]>({
    url: "/api/tasks",
    defaultValue: [],
  });

  const handleSaveForm = () => {
    reload();
  };

  return (
    <Container>
      <Box
        sx={{
          py: "80px",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{
            mb: 3.5,
            textAlign: "center",
          }}
        >
          Lista de tareas
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            setIsOpenModal(true);
            setTaskSelected(undefined);
          }}
          sx={{
            my: 4,
          }}
        >
          Crear tarea
        </Button>
        <TaskForm
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          taskSelected={taskSelected}
          onSuccessSavingTask={handleSaveForm}
        />
        <TasksDatagrid
          isLoading={isLoading}
          tasks={data}
          onEditTask={(task) => {
            setIsOpenModal(true);
            setTaskSelected(task);
          }}
          onRemoveTask={() => {}}
        />
      </Box>
    </Container>
  );
};

export default Home;
