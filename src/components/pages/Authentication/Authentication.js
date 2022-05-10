import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import CommonButton from "../../common/CommonButton/CommonButton";
import BasicCard from "../../common/CommonButton/BasicCard/BasicCard";
import SearchBar from "../../common/CommonButton/SearchBar/SearchBar";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
const Authentication = () => {
  const getHeader = () => {
    const handleChange = (value) => {
      console.log(value);
    };

    const addUser = () => {
      console.log("click");
    };
    const headerStyles = {
      wrapper: {
        display: "flex",
        alingnItems: "center",
        justifyContent: "space-between",
        paddingLeft: "20px",
        paddingRight: "20px",
        height: "65px",
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid rgba(0,0,0,0.12)",
      },
      addUserButtom: {
        fontSize: "1.05rem",
      },
    };
    return (
      <Box sx={headerStyles.wrapper}>
        <SearchBar
          placeholder="Search by email address, phone number, or user UID"
          onChange={(event) => handleChange(event.target.value)}
          SearchBarWidth="720px"
        />
        <Box>
         
          <CommonButton
           variant="contained"
           onClick={addUser}
           size="large"
           sx={headerStyles.addUserButtom}
          >
                Add user
          </CommonButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const getContent = () => {
    return (
      <Typography
        align="center"
        sx={{
          margin: "40px 16px",
          color: "rgba(0,0,0,0.6)",
          fontSize: "1.3rem",
        }}
      >
        No users for this project yet
      </Typography>
    );
  };

  return (
    <>
      <Grid item xs={9} sx={{ marginLeft: "320px",backgroundColor:'#eaeff1',padding:'48px 32px',minHeight:'calc(100vh - 166px)',position:'relative' }}>
        <br />
        <BasicCard 
        header={getHeader()}
        content={getContent()} />
      </Grid>
    </>
  );
};

export default Authentication;
