import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { modalStyle } from "./styles";
import CommonButton from "../CommonButton";
import { Input } from "@mui/material";

const BasicModal = ({ open, onClose,title,subTitle,content,onSubmit  }) => {
  

  return (
    <div>
      <Modal open={open} onClose={onClose} >
            <Box sx={modalStyle.wrapper}>
                <Typography
                    variant="h6"
                    component="h2"
                >
                    {title}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    {subTitle}
                </Typography>
                {content}
                <Box sx={modalStyle.buttons}>
                    <CommonButton
                        variant="contained"
                        onClick={onSubmit}
                    >
                        Submit
                    </CommonButton>
                    <CommonButton onClick={onClose}>Cancel</CommonButton>
                </Box>
            </Box>
        </Modal>
    </div>
  );
};

export default BasicModal;
