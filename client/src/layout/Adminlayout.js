import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import { Box, Grid } from "@mui/material";

const Adminlayout = () => {
  return (
    <>
      <Box sx={{display:"flex"}}>
       <Box>
       <Sidebar />
       </Box>

       <Box>
       <Outlet></Outlet>
       </Box>
      </Box>
    </>
  );
};

export default Adminlayout;
