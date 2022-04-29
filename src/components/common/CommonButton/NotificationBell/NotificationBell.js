import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const NotificationBell = ({ iconColor, badgeContent }) => {
  const newNotifications =`You have ${badgeContent} new notifications!`
  const noNotifications="No new notifications"

    return (
    <Tooltip title={badgeContent ? newNotifications: noNotifications}>
      <IconButton color="primary">
        <Badge badgeContent={badgeContent} color="error">
          <NotificationsNoneIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export default NotificationBell;
