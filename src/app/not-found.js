import { Box, Typography } from '@mui/material'
import Image from "next/image";
import React from 'react'

export default function NotFound() {
  return (
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      minHeight:'100vh',
      maxWidth:'100vw',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      p:12,
      color:'primary.main',
      backgroundColor:'primary.dark'

    }}> 
        <Typography variant='h2' mb={9}>Sorry, Page Not Found</Typography>
         <Image src='/loop-vector.svg' height={300} width={400} alt='svg' />
    </Box>
  )
}
