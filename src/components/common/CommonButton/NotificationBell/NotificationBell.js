import React,{useState} from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import BasicMenu from "../Basicmenu/BasicMenu";


const NotificationBell = ({ iconColor, badgeContent }) => {
  const newNotifications =`You have ${badgeContent} new notifications!`
  const noNotifications="No new notifications"
  const [open,setOpen]=useState(false)
  const[anchorEl,setAnchorEl] = useState(null);
  const handleOpen =(e)=>{
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }

  const handleClose =()=>{
    setOpen(false);
    
  }
    const notifications=[
      {

        id:0,
        label:'First notification'
      },
      {
        id:1,
        label:'Second notification'
      }
    ]

    return (
      <>

      
    <Tooltip title={notifications.length ? newNotifications: noNotifications}>
      <IconButton 
      color={iconColor}
      onClick={notifications.length? handleOpen:null}
      anchorEl={anchorEl}
      >
        <Badge badgeContent={notifications.length}
         color="error">
          <NotificationsNoneIcon />
        </Badge>
      </IconButton>
    </Tooltip>

<BasicMenu 
open={open}
anchorEl={anchorEl}
handleClose={handleClose}
menuItems={notifications}
/>
</>
  );
};

export default NotificationBell;
