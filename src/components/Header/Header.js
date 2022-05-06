import React from "react";
import CommonButton from "../common/CommonButton/CommonButton";
import NotificationBell from "../common/CommonButton/NotificationBell/NotificationBell";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import HelpIcon from "@mui/icons-material/Help";
import Box from "@mui/material/Box";

const Header = ({ title }) => {
    const headerStyles = {
        wrapper: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#009be5',
            padding: '20px',
        },
        topRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            alignItems: 'center',
            marginBottom: '20px',
            '*': {
                marginRight: '5px',
            },
        },
        middleRow: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            marginLeft: '320px',
        },
        link: {
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.7)',
            "&:hover": {
                color: '#fff',
                cursor: 'pointer',
            },
        },
        webButton: {
            marginRight: '5px',
            color:'white'
            
        },
    };

  return (
   
      <Box sx={headerStyles.wrapper}>
        <Box sx={headerStyles.topRow}>
          <Typography  sx={headerStyles.link}>Go to docs</Typography>
          <NotificationBell iconColor="primary" />
          <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
        </Box>

        <Box sx={headerStyles.middleRow}>
          <Typography variant="h4" color="white">
            {title}
          </Typography>
          <Box sx={headerStyles.webButton}>
            <CommonButton 
            variant="outlined"
            sx={headerStyles.webButton}
            >
                Web setup</CommonButton>
            <Tooltip title="help">
              <IconButton 
           sx={headerStyles.HelpIcon}
              >
                <HelpIcon
                color="primary"
                ></HelpIcon>
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    
  );
};

export default Header;
