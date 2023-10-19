"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  AppBar,
  Toolbar,
} from "@mui/material";
import Cookies from "js-cookie";
import TasksDatagrid from "./TasksDatagrid";
import { useFetch } from "@/hooks/useFetch";
import { ITask } from "@/interfaces/Task";
import TaskForm from "./TaskForm";
import { USER_LOGIN_COOKIE } from "@/constants/cookies";
import { useRouter } from "next/navigation";

const Home = () => {
  const { replace } = useRouter();
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

  const handleCloseSession = () => {
    Cookies.remove(USER_LOGIN_COOKIE);
    replace("/login");
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Construtex
          </Typography>
          <Button color="inherit" onClick={handleCloseSession}>
            Cerrar sesión
          </Button>
        </Toolbar>
      </AppBar>
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
    </>
  );
};

export default Home;
