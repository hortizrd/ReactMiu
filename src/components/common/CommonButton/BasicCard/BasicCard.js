import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const BasicCard = ({header,content}) => {
  return (
    <Card>
       {header}
          <CardContent>
            hola
         {content}
          </CardContent>
       
    </Card>
  )
}

export default BasicCard