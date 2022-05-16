import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import CommonButton from "../../common/CommonButton/CommonButton";
import BasicCard from "../../common/CommonButton/BasicCard/BasicCard";
import SearchBar from "../../common/CommonButton/SearchBar/SearchBar";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import GridWrapper from "../../common/CommonButton/GridWrapper/GridWrapper";
import { headerStyles } from "./styles";
import BasicModal from "../../common/CommonButton/BasicModal/BasicModal";
import NewUserModals from "../../Modals/NewUserModal/NewUserModals";

const Authentication = () => {
  const [open, setOpen] = useState(false);
  const [users,setUsers]= useState([])

  const [searchResult,setSearchResult]= useState(users);
  const getHeader = () => {
    const handleSearch = (value) => {
     filterData(value)
    };

    const filterData=(value)=>{
      const lowerCaseValue = value.toLowerCase().trim();
      if(lowerCaseValue ==='') setUsers(searchResult);
      else{
        const filterData =searchResult.filter((item)=>{
          return Object.keys(item).some((key)=>
          item[key].toString().toLowerCase().includes(lowerCaseValue)
          );
        });
        setUsers(filterData)
      }
    }

    const addUser = () => {
      setOpen(true);
    };

    return (
      <Box sx={headerStyles.wrapper}>
        <SearchBar
          placeholder="Search by email address, phone number, or user UID"
          onChange={(event) => handleSearch(event.target.value)}
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


  const addNewUser = (data)=>{
    users.push({...data})
    setOpen(false)
  }
  const getContent = () => {
    return (
      <>
      {users.length ?
    users.map((user)=>(
      <Box>
        <Typography>User ID:{user.userId}</Typography>
      <Typography>Email: {user.email}</Typography>
      <Typography>phoneNumber: {user.phoneNumber}</Typography>
      </Box>
    )):
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
         }
      </>
    );
  };

  return (
    <>
      <GridWrapper>
        <br />
        <BasicCard header={getHeader()} content={getContent() }  />

        <NewUserModals open={open} onClose={() => setOpen(false)} addNewUser={addNewUser} />
      </GridWrapper>
    </>
  );
};

export default Authentication;
