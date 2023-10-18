import { Box, Container, Typography } from "@mui/material";
import React from "react";
import TasksDatagrid from "./TasksDatagrid";
import { useFetch } from "@/hooks/useFetch";
import { ITask } from "@/interfaces/Task";

const Home = () => {
  const { data, isLoading } = useFetch<ITask[]>({
    url: "/api/tasks",
    defaultValue: [],
  });
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
          }}
        >
          Lista de tareas
        </Typography>
        <TasksDatagrid
          isLoading={isLoading}
          tasks={data}
          onEditTask={() => {}}
          onRemoveTask={() => {}}
        />
      </Box>
    </Container>
  );
};

export default Home;
