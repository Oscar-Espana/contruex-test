"use client";
import { RootState } from "@/store/store";
import { Box, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

export const FullScreenLoading = () => {
  const isLoading = useSelector(({ ui }: RootState) => ui.isLoading);

  if (!isLoading) return null;

  return (
    <Box
      sx={{
        zIndex: 5000,
        position: "absolute",
        background: "#0000005f",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress thickness={3} />
    </Box>
  );
};
