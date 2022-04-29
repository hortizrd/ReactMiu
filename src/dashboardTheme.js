import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

import React from 'react'

export const dashboardTheme =  createTheme({
    components: {
        // Name of the component
        MuiButton: {
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              fontSize: '1rem! important',
            },
          },
        },
      },
})
 