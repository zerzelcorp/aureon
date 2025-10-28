"use client";
import { Box,Badge, Button, Divider, Drawer, IconButton, Typography, CircularProgress, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import useCartStore from "../stores/useCartStore";
import { Add, CloseOutlined, Delete, Remove } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { grey, red } from "@mui/material/colors";
// import userStore from "../stores/userStore";
import Link from "next/link";
import { usePathname } from 'next/navigation'; 
import { AnimatePresence,motion } from "framer-motion";

export default function Cart() {
  const router = useRouter();
  const pathname = usePathname();
//   const {user} = userStore();
const theme = useTheme();

  const {
    cartItems,
    removeItemFromCart,
    getItemQuantity,
    decreaseQuantity,
    increaseQuantity,
    cartTotalBalance,
    cartSubTotalBalance,
    isOpen,
    shippingCost,
    openCartDrawer,
    closeCartDrawer
  } = useCartStore();

  const [cartAnchor, setCartAnchor] = useState("top"); 
  const [loading, setLoading] = useState(false);
  // const storedUser =  localStorage.getItem('user');
  // const parsedUser = storedUser ? JSON.parse(storedUser) : null;

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // const shippingCost = 15;
  const calculateTotal = () => {
   const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity + shippingCost;
   },0);
   return subtotal + shippingCost;
  };

  const goToCheckOut = async()=>{
   setLoading(true);
   
   // Show spinner after 3ms delay
   setTimeout(async () => {
     try {
       // Simulate navigation processing
       await new Promise(resolve => setTimeout(resolve, 500)); // Small delay for smooth transition
       router.push('/checkout');
     } catch (error) {
       console.error("Navigation failed:", error);
       setLoading(false);
     }
   }, 3); // 3ms delay before showing spinner
  }

  useEffect(() => {
    if (pathname === '/checkout') {
      closeCartDrawer();
    }
  }, [pathname, closeCartDrawer]);


 useEffect(() => {
  console.log('current custom theme:',theme);
//     console.log(cartItems);
//     console.log('cartTotalBalance:',cartTotalBalance());
//     console.log('cartSubTotalBalance:',cartSubTotalBalance());
}, [cartItems,cartTotalBalance,cartSubTotalBalance]);


  return (

    <AnimatePresence>
    <motion.div
     initial={{opacity:0,y:-200}}
     animate={{opacity:1,y:0}}
     exit={{opacity:0,y:-200}}
     transition={{duration:0.5,ease:'easeIn'}}
    >
    <Drawer
      open={isOpen}
      anchor={cartAnchor}
      onClose={closeCartDrawer}
      sx={{
        height:"100%",
        width:'100vw',

        "& .MuiDrawer-paper": {
          backgroundColor: "primary.dark",
          color: "secondary.main",
          // minHeight:{xs:'100vh', lg:"70vh"},
          // maxHeight: { xs: '100vh', lg: '70vh' },
          height:'auto',
          width: '100vw',
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: 4,
          p: 4,
          '&::-webkit-scrollbar': {
          width: '12px',
         },
 //esto setea el color y estilos del background en el scrollbar
    '&::-webkit-scrollbar-track': {
     backgroundColor:'red',
     boxShadow:'inset 0 0 5px grey',
    //  borderRadius: '10px'
   },
   //esto setea el color del scrollbar
   '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'blue',
    borderRadius: '10px',
    // backgroundColor: (theme) => `${theme.palette.grey[500]} transparent`,
    // border: '8px solid transparent',
    // backgroundClip: 'content-box',
    '&:hover': {
      backgroundColor: (theme) => `${theme.palette.grey[500]}`
    }
  },
        },
      }}
    >
    <Box
    sx={{
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    }}
    >
    <IconButton onClick={closeCartDrawer} sx={{position:'absolute',right:15,top:0}}>
       <CloseOutlined fontSize="small"/>
    </IconButton>
      <Typography variant="h2">My Cart</Typography>
    </Box>
  <Divider sx={{ width: "100%", backgroundColor: "secondary.main" }} />     
    {cartItems.length > 0 ? (
      <Box sx={{
      overflowY:'auto',
      width:'100%',
    '&::-webkit-scrollbar': {
      width: '10px',
     },
     '&::-webkit-scrollbar-button': {
      display: 'none',
      height: 0,
      width: 0
},
 //esto setea el color y estilos del background en el scrollbar
    '&::-webkit-scrollbar-track': {
     backgroundColor:(theme) => `${theme.palette.grey[900]} transparent`,
    //  boxShadow:'inset 0 0 5px grey',
    //  borderRadius: '10px'
   },
   //esto setea el color del scrollbar
   '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'black',
    borderRadius: '10px',
    // backgroundColor: (theme) => `${theme.palette.grey[500]} transparent`,
    // border: '8px solid transparent',
    backgroundClip: 'content-box',
    transition:'all 300ms easeIn',
    '&:hover': {
      backgroundColor: (theme) => `${theme.palette.grey[800]}`
    }
  },
  // // Para Firefox
  // scrollbarWidth: 'thin',
  // scrollbarGutter:'stable',
  // scrollBehavior:'smooth',
  // scrollMargin:0,
  // scrollPadding:0,
  // // scrollbarColor: '#040404 #7a7676 '
  //   scrollbarColor:`${theme.palette.grey[800]} transparent`
}}>
        {
          cartItems.map((item) => (
          <CartItem key={item.id} item={item}/>
        ))
        }
        
        {/* Sección de totales */}
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          p: 2,
          gap: 2,
          mt: 'auto', // Empuja hacia abajo
          pt: 4
        }}>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Typography variant="h5">Subtotal</Typography>
            <Typography variant="h5">USD {calculateSubtotal().toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Typography variant="h6" color="primary.muted">Shipping</Typography>
            <Typography variant="h6" color="primary.muted">USD {parseInt(shippingCost).toLocaleString('de-DE')}</Typography>
          </Box>
          <Divider sx={{ width: "100%", backgroundColor: theme.palette.grey[700]}} />             <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", mt: 6, mb: 4 }}>
            <Typography variant="h4" fontWeight="bold">Total</Typography>
            <Typography variant="h4" fontWeight="bold">
              USD {cartTotalBalance().toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </Typography>
          </Box>
          <Button
            variant="contained"
            fontWeight="bold"
            sx={{ fontSize: '1.3rem', p: 2, color: 'text.main', width: { lg:'40%',xl: '40%' } }}
            onClick={goToCheckOut}
          >
            {loading ? <CircularProgress color="text.primary" /> : "Checkout"}
          </Button>
        </Box>
      </Box>
    ) : (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', flex: 1 }}>
        <Typography variant="h4" textAlign='center'>Cart is empty</Typography>
      </Box>
    )}
    </Drawer>
    </motion.div>
    </AnimatePresence>
  );
}
