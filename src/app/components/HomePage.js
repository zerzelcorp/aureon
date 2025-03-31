'use client'
import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import {motion,AnimatePresence } from 'framer-motion'
import React from 'react'
import Cart from './Cart'
import HomeProducstCarrousel from './HomeProducstCarrousel'
import Link from 'next/link'

export default function HomePage() {
  return (
    <Box sx={{display:'flex',flexDirection:'column',minHeight:'100vh',width:'100%'}}>
     {/* <Cart/> */}
     {/* HEADER */}
      <Box sx={{
        height:'100vh',
        p:10,
        position:'relative',
        backgroundImage:"url('/bkg1-md.jpg')",
        backgroundPosition: "bottom", 
        backgroundColor: "rgba(0, 0, 0, 0.26)",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundRepeat:'no-repeat'}}>
        <Box sx={{display:'flex',justifyContent:'center',width:'auto',flexDirection:'column',gap:2,p:{xs:0,sm:8,md:8,lg:10},mt:{xs:10}}}>
         <motion.div
         initial={{opacity:0,x:-150,y:-70}}
         animate={{opacity:1,x:[0,0,0],y:0}}
         transition={{duration:0.5,ease:'easeInOut'}}
         style={{width:'100%'}}
         >
         <Typography variant='h1' sx={{fontSize:{xs:'6rem',md:'10rem'}}}>Aureon</Typography>
         <Typography variant='body1'>
         Immerse yourself in a world of elegance and distinction with Aureon, where luxury furniture and interior design come together to create unique spaces. Each piece is a statement of style, blending premium materials, sophisticated lines, and impeccable craftsmanship. Prestige, quality, and exclusivity define our essence.
         </Typography>
         </motion.div>
    <Link href='/collections/new-arrivals'>
      <Button variant='contained' 
        sx={{
        p:2,
        width:{xs:'80%',lg:'20%'},
        fontSize:'1.1rem',
        transition: 'all 0.2s ease-in-out',
        mt:2,
        boxShadow: 2,
         '&:hover': {
         boxShadow: 8, 
         transform: 'translateY(-2px)',
        },
        }}>
        New Arrivals
      </Button>
      </Link>
        </Box>
      </Box>
      <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'row',lg:'row'},gap:6,p:{xs:2,lg:4},height:{xs:'auto',sm:'500px',lg:'600px'},width:'100%'}}>
          <Box sx={{
            display:'flex',
            alignItems:'center',
            width:{xs:'100%',lg:'50%'},
            backgroundImage:"url('/content1.jpg')",
            backgroundSize: "cover",
            backgroundColor:'primary.main',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat'
            }}
           >
           <AnimatePresence>
            <motion.div
              initial={{opacity:0,y:-100}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.4,delay:0.3,ease:'easeInOut'}}
           >
           <Typography sx={{p:4}}> 
          Deserunt ex tempor tempor excepteur elit proident fugiat tempor. Sit esse enim aliqua laboris aliqua nulla ullamco est elit exercitation excepteur. Consequat culpa sunt culpa non. Consectetur exercitation dolore ex et non exercitation.
           Deserunt ex tempor tempor excepteur elit proident fugiat tempor. Sit esse enim aliqua laboris aliqua nulla ullamco est elit exercitation excepteur. Consequat culpa sunt culpa non. Consectetur exercitation dolore ex et non exercitation. 
           </Typography>

           </motion.div>
           </AnimatePresence>
          </Box>
          <Box sx={{
            display:'flex',
            alignItems:'center',
            width:{xs:'100%',lg:'50%'},
            backgroundImage:"url('/content2.jpg')",
            backgroundSize: "cover",
            backgroundColor:'primary.main',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat'
            }}
          >
          <AnimatePresence>
             <motion.div
          initial={{opacity:0,y:-100}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.4,ease:'easeInOut'}}
          >
          <Typography sx={{p:4}}>
           Deserunt ex tempor tempor excepteur elit proident fugiat tempor. Sit esse enim aliqua laboris aliqua nulla ullamco est elit exercitation excepteur. Consequat culpa sunt culpa non. Consectetur exercitation dolore ex et non exercitation.
          </Typography>
             </motion.div>
          </AnimatePresence>
          </Box>
      </Box>
      {/* <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'grey',height:'300px',width:'100%'}}> */}
           {/* <HomeProducstCarrousel/> */}
      {/* </Box> */}
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        height:{xs:'auto',lg:'500px'},
        width:'100%',
        display:'flex',
        justifyContent:'center',
        gap:4,
        p:2,
        alignItems:'center',
        backgroundImage:"url('/leather-couch.jpg')",
        backgroundSize: "cover",
        backgroundColor:'primary.main',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
      }}>
        <Typography variant='h5' p={8}>
            Aute sint voluptate consequat commodo ipsum eu in. Velit do irure duis nulla commodo ut magna fugiat. Proident culpa irure id duis.
            Aute sint voluptate consequat commodo ipsum eu in. Velit do irure duis nulla commodo ut magna fugiat. Proident culpa irure id duis.
        </Typography>
        <Button variant='contained' sx={{fontSize:'1.2rem',p:2,boxShadow:2,":hover":{boxShadow:4,transform:'transaleY(-4px)'}}}>Explore</Button>
        {/* <Button variant='contained'>other</Button> */}
      </Box>
      <Box sx={{display:'flex',flexDirection:'column',gap:6,justifyContent:'center',alignItems:'center',height:'350px',width:'100%'}}>
        <Typography variant='h5' textAlign='center'>Subscribe to our newsletter</Typography>
         <Divider sx={{width:'80%',border:0.6,borderColor:grey[700]}}/>
         <TextField variant='standard' placeholder='E-mail*' sx={{width:'40%'}}/>
        <Button variant='contained' sx={{width:'10%'}}>other</Button>
      </Box>

    </Box>
  )
}
