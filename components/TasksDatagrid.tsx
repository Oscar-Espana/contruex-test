import React from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { Box, IconButton } from "@mui/material";
import { ITask } from "@/interfaces/Task";

interface Props {
  tasks: ITask[];
  onEditTask: (idTask: string) => void;
  onRemoveTask: (idTask: string) => void;
}
const TasksDatagrid = ({ tasks = [], onEditTask, onRemoveTask }: Props) => {
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Acciones",
      renderCell: (params: GridRenderCellParams) => {
        const id = params.row.id || "";
        return (
          <Box>
            <IconButton
              onClick={() => {
                onEditTask(id);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                onRemoveTask(id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
    {
      field: "title",
      headerName: "Título",
      minWidth: 125,
      renderCell: (params: GridRenderCellParams) => {
        const title = params.row.title || "";
        return <>{title}</>;
      },
    },
    {
      field: "description",
      headerName: "Descripción",
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => {
        const description = params.row.description || "";
        return <>{description}</>;
      },
    },
    {
      field: "dueDate",
      headerName: "Fecha Vencimiento",
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => {
        const dueDate = params.row.dueDate || "";
        return <>{dueDate}</>;
      },
    },
    // { field: "budget", headerName: "Presupuesto" },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={tasks} columns={columns} hideFooter />
    </div>
  );
};

export default TasksDatagrid;
