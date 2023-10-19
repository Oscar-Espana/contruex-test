import React from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { Box, IconButton } from "@mui/material";
import { ITask } from "@/interfaces/Task";
import dayjs from "dayjs";

interface Props {
  isLoading: boolean;
  tasks: ITask[];
  onEditTask: (task: ITask) => void;
  onRemoveTask: (task: ITask) => void;
}
const TasksDatagrid = ({
  isLoading,
  tasks = [],
  onEditTask,
  onRemoveTask,
}: Props) => {
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
                onEditTask(params.row);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                onRemoveTask(params.row);
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
      minWidth: 175,
      renderCell: (params: GridRenderCellParams) => {
        const title = params.row.title || "";
        return <>{title}</>;
      },
    },
    {
      field: "description",
      headerName: "Descripción",
      minWidth: 275,
      renderCell: (params: GridRenderCellParams) => {
        const description = params.row.description || "";
        return <>{description}</>;
      },
    },
    {
      field: "dueDate",
      headerName: "Fecha Vencimiento",
      minWidth: 250,
      renderCell: (params: GridRenderCellParams) => {
        const dueDate = params.row.dueDate
          ? `${dayjs(new Date(params.row.dueDate)).format("YYYY/MM/DD HH:mm")}`
          : "";
        return <>{dueDate}</>;
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid loading={isLoading} rows={tasks} columns={columns} hideFooter />
    </div>
  );
};

export default TasksDatagrid;
