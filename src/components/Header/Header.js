import React from "react";
import CommonButton from "../common/CommonButton/CommonButton";
import NotificationBell from "../common/CommonButton/NotificationBell/NotificationBell";
import Avatar from "@mui/material/Avatar";
const Header = () => {
  return (
    <>
      <CommonButton>Go to docs</CommonButton>

      <NotificationBell iconColor="primary" />
      <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
    </>
  );
};

export default Header;
