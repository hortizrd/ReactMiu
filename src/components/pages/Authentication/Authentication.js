import React from "react";
import Grid from "@mui/material/Grid";
import CommonButton from "../../common/CommonButton/CommonButton";
import Example from "../../Example";
import NotificationBell from "../../common/CommonButton/NotificationBell/NotificationBell";
import BasicMenu from "../../common/CommonButton/Basicmenu/BasicMenu";

const Authentication = () => {
  const buttonStyles = {
    fontSize: 20,
    fontWwight: 700,
    backgroundColor: "red",
  };
  return (
    <Grid xs={8}>

      Authentication<NotificationBell
       iconColor="error"
       badgeContent={5}
       />
    
     <BasicMenu/>
    
    </Grid>
  );
};

export default Authentication;
