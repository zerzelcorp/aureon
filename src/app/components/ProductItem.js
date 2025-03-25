'use client'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import { easeIn, easeInOut, motion } from 'framer-motion'
import Link from 'next/link'
import React,{useEffect,useState} from 'react'
import useCartStore from '../stores/useCartStore'

export default function ProductItem({item}) {
 const {cartItems, removeItemFromCart,addToCart,cartSubTotalBalance,cartTotalBalance,data} = useCartStore(); 

useEffect(() => {
  //  console.log('item in product item:',item);
}, [item])

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.3,delay:0.2,ease:easeIn}}
    >
    <Link href={`/${item.category}/${item.productType}/${item.id}`}>

     <Card
    sx={{
      width: "100%",
      cursor: "pointer",
      transition: "all 200ms ease-in-out",
      ":hover": { opacity: 0.6 },
    }}
  >
    {/* <CardHeader>header</CardHeader> */}
    <CardMedia
      sx={{ height: "350px" }}
      image={item.image}
      title="furniture"
    />
    <Divider />
    <CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          color="text.dark"
          fontWeight="semi-bold"
          sx={{
            ":hover":{
                opacity:0.6,
                transition:'all 300ms easeInOut'
            }
          }}
        >
          {item.title}
        </Typography>
        <Typography color="text.dark" fontWeight="bold">
         ${item.price}
        </Typography>
      </Box>
      <Divider />
      <Typography color="text.dark" mt={2} variant="body1">
        Anim laboris ipsum ullanostrud.dent anim qui ad.Quis consectetur
        veniam reprehenderit culpa anim aliqua exercitation pariatur
        aute aliqua id elit.
      </Typography>
    </CardContent>
    <CardActions
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Button variant="contained" sx={{ boxShadow:2, width: "50%",transition:'all 200ms ease-in-out', ":hover":{boxShadow:4} }}>
        Add
      </Button>
    </CardActions>
     </Card>
    </Link>
    </motion.div>
  )
}
