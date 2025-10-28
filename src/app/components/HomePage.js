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
        p:{xs:4,sm:6,md:8,lg:10},
        position:'relative',
        backgroundImage:"url('/bkg1-md.jpg')",
        backgroundPosition: "bottom", 
        backgroundSize: "cover",
        backgroundRepeat:'no-repeat',
        display:'flex',
        alignItems:'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.15) 100%)',
        }
        }}>
        <Box sx={{display:'flex',justifyContent:'flex-start',width:'auto',flexDirection:'column',gap:3,p:{xs:2,sm:8,md:8,lg:10},position:'relative',zIndex:1}}>
         <motion.div
         initial={{opacity:0,y:20}}
         animate={{opacity:1,y:0}}
         transition={{duration:0.8,ease:'easeOut'}}
         style={{width:'100%'}}
         >
         <Typography variant='h1' sx={{
           fontSize:{xs:'6.5rem',sm:'7rem',md:'8.5rem',lg:'10rem'},
           fontWeight:400,
           letterSpacing:'-0.02em',
           lineHeight:0.9,
           mb:{xs:0.2,sm:0.3,md:0.4}
         }}>
           Aureon
         </Typography>
         </motion.div>
         
         {/* Gradient line separator */}
         <motion.div
         initial={{opacity:0,scaleX:0}}
         animate={{opacity:1,scaleX:1}}
         transition={{duration:1,delay:0.1,ease:'easeOut'}}
         style={{
           width:'100%',
           height:'1px',
           background:'linear-gradient(to right, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)',
           transformOrigin:'left',
           mb:{xs:0.8,sm:1,md:1.2}
         }}
         />
         
         <motion.div
         initial={{opacity:0,y:20}}
         animate={{opacity:1,y:0}}
         transition={{duration:0.8,delay:0.2,ease:'easeOut'}}
         style={{width:'100%'}}
         >
         <Typography variant='body1' sx={{
           fontWeight:300,
           fontSize:{xs:'1.3rem',sm:'1.5rem',md:'1.6rem',lg:'1.7rem'}
         }}>
         Immerse yourself in a world of elegance and distinction with Aureon, where luxury furniture and interior design come together to create unique spaces. Each piece is a statement of style, blending premium materials, sophisticated lines, and impeccable craftsmanship. Prestige, quality, and exclusivity define our essence.
         </Typography>
         </motion.div>
         <motion.div
         initial={{opacity:0,y:20}}
         animate={{opacity:1,y:0}}
         transition={{duration:0.8,delay:0.4,ease:'easeOut'}}
         >
    <Link href='/collections/new-arrivals'>
      <Button variant='contained' 
        sx={{
        p:{xs:1.5,sm:2},
        width:{xs:'100%',sm:'auto'},
        minWidth:'180px',
        fontSize:{xs:'1.1rem',sm:'1.2rem',md:'1.3rem',lg:'1.4rem'},
        fontWeight:300,
        letterSpacing:'0.05em',
        textTransform:'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        mt:2,
        boxShadow: 2,
         '&:hover': {
         boxShadow: 8, 
         transform: 'translateY(-2px)',
        },
        }}>
        Explore Collection
      </Button>
      </Link>
         </motion.div>
        </Box>
      </Box>
      <Box sx={{
        display:'flex',
        flexDirection:{xs:'column',sm:'column',lg:'row'},
        gap:0,
        height:{xs:'auto',sm:'auto',lg:'700px'},
        width:'100%',
        overflow:'hidden'
      }}>
          <Box sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            width:{xs:'100%',lg:'50%'},
            minHeight:{xs:'500px',lg:'700px'},
            position:'relative',
            backgroundImage:"url('/content1.jpg')",
            backgroundSize: "cover",
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.4) 100%)',
            }
            }}
           >
           <AnimatePresence>
            <motion.div
              initial={{opacity:0,y:30}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.8,delay:0.2,ease:'easeOut'}}
              style={{position:'relative',zIndex:1,maxWidth:'85%'}}
           >
           <Typography sx={{
             p:6,
             fontWeight:300,
             fontSize:{xs:'1.4rem',sm:'1.5rem',md:'1.8rem',lg:'2rem'},
             lineHeight:1.6,
             letterSpacing:'0.01em',
             color:'rgba(255,255,255,0.95)'
           }}> 
           Discover the perfect balance between minimalism and warmth. Each curve, texture, and finish elevates your living space with effortless sophistication.
           </Typography>

           </motion.div>
           </AnimatePresence>
          </Box>
          <Box sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            width:{xs:'100%',lg:'50%'},
            minHeight:{xs:'500px',lg:'700px'},
            position:'relative',
            backgroundImage:"url('/content2.jpg')",
            backgroundSize: "cover",
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.4) 100%)',
            }
            }}
          >
          <AnimatePresence>
             <motion.div
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.8,delay:0.4,ease:'easeOut'}}
          style={{position:'relative',zIndex:1,maxWidth:'85%'}}
          >
          <Typography sx={{
            p:6,
            fontWeight:300,
            fontSize:{xs:'1.4rem',sm:'1.5rem',md:'1.8rem',lg:'2rem'},
            lineHeight:1.6,
            letterSpacing:'0.01em',
            color:'rgba(255,255,255,0.95)'
          }}>
          Crafted for those who appreciate quality and simplicity. An expression of style that speaks louder than words.
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
        minHeight:{xs:'auto',lg:'600px'},
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        gap:6,
        py:{xs:8,md:12},
        px:{xs:4,md:8},
        backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('/leather-couch.jpg')",
        backgroundSize: "cover",
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        position:'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)',
        }
      }}>
        <Typography variant='h5' sx={{
          fontSize:{xs:'1.8rem',sm:'2rem',md:'2.8rem',lg:'3rem'},
          fontWeight:300,
          letterSpacing:'-0.01em',
          lineHeight:1.4,
          px:{xs:4,md:12},
          textAlign:'center',
          maxWidth:'900px',
          position:'relative',
          zIndex:1,
          color:'rgba(255,255,255,0.95)'
        }}>
        Every detail tells a story. From the grain of solid wood to the precise lines of our craftsmanship, Aureon redefines contemporary living with a curated collection of furniture designed to inspire.
        </Typography>
        <Link href='living/chairs'>
          <Button variant='contained' sx={{
            fontSize:{xs:'1.1rem',sm:'1.2rem',md:'1.3rem',lg:'1.4rem'},
            fontWeight:300,
            textTransform:'none',
            letterSpacing:'0.05em',
            p:{xs:1.5,sm:2},
            minWidth:'180px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            position:'relative',
            zIndex:1,
            "&:hover":{
              boxShadow:'0 8px 30px rgba(0,0,0,0.3)',
              transform:'translateY(-3px)',
            },
            transition:'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}>
            Shop Living
          </Button>
        </Link>
      </Box>
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        gap:4,
        justifyContent:'center',
        alignItems:'center',
        minHeight:'400px',
        width:'100%',
        backgroundColor:'background.default',
        py:8,
        px:{xs:4,md:8}
      }}>
        <Typography variant='h4' textAlign='center' fontWeight={300} sx={{fontSize:{xs:'1.8rem',md:'2.5rem'}}}>
          Subscribe to Our Newsletter
        </Typography>
        <Typography variant='body1' textAlign='center' sx={{color:'text.muted',maxWidth:'600px',fontSize:{xs:'1.1rem',md:'1.3rem'}}}>
          Stay updated with our latest collections, exclusive offers, and interior design inspiration.
        </Typography>
        <Box sx={{
          display:'flex',
          flexDirection:{xs:'column',sm:'row'},
          gap:2,
          width:'100%',
          maxWidth:'600px',
          alignItems:'center',
          justifyContent:'center',
          mt:4
        }}>
          <TextField 
            variant='standard' 
            placeholder='E-mail*' 
            sx={{
              flex:1,
              width:'100%',
              '& .MuiInput-underline:before': {
                borderBottomColor: 'rgba(255, 255, 255, 0.3)',
              },
              '& .MuiInput-underline:hover:before': {
                borderBottomColor: 'rgba(255, 255, 255, 0.6)',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'rgba(255, 255, 255, 0.9)',
              },
              '& input': {
                color: 'rgba(255, 255, 255, 0.9)',
              },
              '& input::placeholder': {
                color: 'rgba(255, 255, 255, 0.5)',
              },
            }}
          />
          <Button 
            variant='contained' 
            sx={{
              width:{xs:'100%',sm:'auto'},
              p:{xs:1.5,sm:2},
              minWidth:'150px',
              fontSize:'1rem',
              transition:'all 0.3s ease-in-out',
              boxShadow:2,
              '&:hover': {
                boxShadow:6,
                transform:'translateY(-2px)',
              },
            }}>
            Subscribe
          </Button>
        </Box>
      </Box>

    </Box>
  )
}
