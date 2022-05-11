import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const BasicCard = ({ header, content }) => {
  const cardStyle = {
    with: "1050px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "8px",
  };
  return (
    <Card sx={cardStyle}>
      {header}
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default BasicCard;
