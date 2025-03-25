import { FavoriteBorderOutlined, ShareOutlined } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Typography } from '@mui/material'
import React from 'react'

export default function NewArrivals() {
  return (
    <Box sx={{minHeight:'100vh'}}>

     <Typography variant='h4' p={4}>NewArrivals</Typography>
     <Box gap={2} p={4} display='flex'>
         <Box display='flex' gap={2}>
           <Typography color='text.muted'>Filter by</Typography>
         </Box>
         <Box display='flex' gap={2}>
           <Typography color='text.muted'>Delivery Time</Typography>
         </Box>
        <Typography>1</Typography>
        <Typography>1</Typography>
     </Box>

     <Box sx={{display:'flex',gap:4,width:'100%',p:4}}>
        <Card sx={{width:'100%',cursor:'pointer',transition:'all 200ms ease-in-out',":hover":{opacity:0.6}}}>
        {/* <CardHeader>header</CardHeader> */}
            <CardMedia
            sx={{height:'350px'}}
             image='/content2.jpg'
            title='furniture'
            />
            <Divider/>
            <CardContent >
                 <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>

                <Typography variant='h4' color='text.dark' fontWeight='semi-bold'>Title</Typography>
                <Typography color='text.dark' fontWeight='bold'>$500</Typography>
                 </Box>
                 <Divider/>   
                 <Typography color='text.dark' mt={2} variant='body1'>Anim laboris ipsum ullanostrud.dent anim qui ad.Quis consectetur veniam reprehenderit culpa anim aliqua exercitation pariatur aute aliqua id elit.</Typography>
            </CardContent>
            <CardActions sx={{display:'flex',justifyContent:'space-between'}}>
                <Button variant='contained'  sx={{width:'50%'}}>Add</Button> 
                {/* <Box>
                <IconButton>
                   <ShareOutlined color='dark' fontSize='small'/>
                </IconButton>
                <IconButton>
                   <FavoriteBorderOutlined color='dark' fontSize='small'/>
                </IconButton>
                </Box> */}
            </CardActions>
        </Card>
        <Card sx={{width:'100%'}}>
        {/* <CardHeader>header</CardHeader> */}
            <CardMedia
            sx={{height:'350px'}}
             image='/content2.jpg'
            title='furniture'
            />
            <Divider/>
            <CardContent >
                 <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>

                <Typography variant='h4' color='text.dark' fontWeight='semi-bold'>Title</Typography>
                <Typography color='text.dark' fontWeight='bold'>$500</Typography>
                 </Box>
                 <Divider/>   
                 <Typography color='text.dark' mt={2} variant='body1'>Anim laboris ipsum ullanostrud.dent anim qui ad.Quis consectetur veniam reprehenderit culpa anim aliqua exercitation pariatur aute aliqua id elit.</Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' sx={{width:'50%'}}>Add</Button>
            </CardActions>
        </Card>
     </Box>
    </Box>
  )
}
