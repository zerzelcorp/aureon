'use client'
import { Add, Delete, Remove } from '@mui/icons-material'
import { Box,Button,Divider,IconButton,Typography} from '@mui/material'
import Image from 'next/image'
import React,{useEffect, useState} from 'react'
import { grey } from "@mui/material/colors"
import useCartStore from '../stores/useCartStore'
import { AnimatePresence,motion } from 'framer-motion'

export default function CartItem({item}){
  const {
    cartItems,
    removeItemFromCart, 
    getItemQuantity, 
    decreaseQuantity,
    increaseQuantity,
    cartTotalBalance,
    cartSubTotalBalance,
    isOpen,
    openCartDrawer
  } = useCartStore();


  useEffect(() => {
    console.log('items in cart:',cartItems);
  }, [cartItems])
  
  return (
     <AnimatePresence>
       <motion.div 
       key={item.id}
       initial={false} 
       animate={{opacity:1,x:0}} 
      //  transition={{duration:0.3,ease: [0.16, 1, 0.3, 1],delay:0.2}} 
      //  exit={{opacity:0,x:-200,transition: { duration: 0.4,ease: [0.16, 1, 0.3, 1],delay:0.2 }}}
       exit={{
        opacity:0,
        x:-200,
        transition:{duration:0.3}}}
        transition={{delay:0.2,ease: [0.16, 1, 0.3, 1]
        }}
        style={{width:'100%'}} 
       >
         <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
              md: "row",
              lg: "row",
              backgroundBlendMode:'soft-light'
            },
            borderBottom:1,
            borderColor:grey[700],
            pb:2,
            justifyItems:{ md: "start",sm:'space-between',lg:"space-between" },
            alignItems: "center",
            gap: 0,
            mb:4,
            backgroundColor: "background.dark",
            color: "primary",
            boxShadow: 1,
            width: "100%",
            height: "auto",
          }}
        >
       {/* COL 1 - IMAGE*/}
          <Box
            sx={{
              order:{md:1},
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              mr: {sm:0,lg:0},

              width:'100%',
            }}
          >
          {/* IMAGE */}
            <Box
              sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:"center",
                
                width: "auto",
                height:'auto',
              }}
            >
              <Image
                src={item.image}
                alt="prod image"
                width={150}
                height={150}
                objectFit="contain"
                style={{
                  borderRadius:'8px',
                  width:'100%',
                  height:'auto',
                }}
              />
            </Box>
          </Box>
       {/* COL 2 - TITLE AND PRICE */}
          <Box sx={{
          display:'flex', 
          flexDirection:{xs:'column',sm:'row'},
          justifyContent:{xs:'start',sm:'space-between',lg:'space-between',xl:'space-between'},
          alignItems:{xs:'start',sm:'center'},
          gap:{xs:4,sm:6,lg:4},
          width:'100%',
          mt:{xs:4,sm:0,md:0,lg:0,xl:0},
          ml:{xs:0,sm:4},
          order: {xs:1, sm: 1,md:2 },
        //   backgroundColor:'red'
          }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",         
              }}
            >
              <Typography variant="h3">
                 {item.title}
              </Typography>
            </Box>
            <Box sx={{order:{sm:2}}}>
              <Typography variant="h4" fontWeight={500}>  
                USD {parseInt(item.price).toLocaleString('de-DE')}
              </Typography>
            </Box>   
          </Box>
      {/* COL 3 - Qty and Delete */}
          <Box
            sx={{
              display: "flex",
              order:{xs:2,md:2},
              flexDirection: {xs:'row',sm:"row"},
              justifyContent:{xs:'space-between',sm:'space-between',xl:'space-evenly'},
              width:'100%',
              alignItems:'center',
              mt:{xs:2,sm:0},
              mb:{xs:2,sm:0,lg:0,xl:0},
              p:{sm:10},   
              gap:{xs:2} 
            }} 
          >
       {/* Quantity Box */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#000",
                border:1,
                boxShadow:1,
                borderColor: grey[900],
                color: "primary.light",
                borderRadius: "8px",              
                minWidth: "auto",
              }}
            >
              <IconButton
                onClick={() => decreaseQuantity(item.id)}
                sx={{ color: "#fff" }}
              >
                <Remove />
              </IconButton>

              <Typography variant="h6" sx={{ ml: 2, mr: 2 }}>
                {getItemQuantity(item.id)}
              </Typography>

              <IconButton
                onClick={() => increaseQuantity(item.id)}
                sx={{ color: "#fff" }}
              >
                <Add />
              </IconButton>
            </Box>
   
            <Box>
             <Button onClick={() =>removeItemFromCart(item.id)} variant='contained' sx={{mr:2,opacity:0.6,fontSize:'1rem',transition:'all 100ms ease-in-out',":hover":{opacity:1}}}>Remove</Button>
              {/* <IconButton onClick={() =>removeItemFromCart(item.id)} size="large">
               <Delete color="error" sx={{opacity:0.7,":hover":{opacity:1,transition:'opacity',transitionDuration:'0.4',transitionTimingFunction:'ease-in-out'}}}/>
              </IconButton> */}
            </Box>
          </Box>
        </Box>
       </motion.div>    
     </AnimatePresence>
  )
}
