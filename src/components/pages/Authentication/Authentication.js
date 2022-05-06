import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import CommonButton from "../../common/CommonButton/CommonButton";
import BasicCard from "../../common/CommonButton/BasicCard/BasicCard";
import SearchBar from "../../common/CommonButton/SearchBar/SearchBar";

const Authentication = () => {
  return(
<>

<Grid item xs={8} sx={{ marginLeft: '320px' }}>
    <br />
    <BasicCard header={<SearchBar/>} />
  </Grid>
</>
  )

 
};

export default Authentication;
