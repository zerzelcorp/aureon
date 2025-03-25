'use client'
import { AppBar, Box, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import {AnimatedPresence,motion} from 'framer-motion'
import Link from 'next/link'
import React,{useState,useEffect} from 'react'

export default function NavBar2() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", p: 2 }}>
        <Toolbar disableGutters>
         <Box sx={{display:'flex',gap:2,alignItems:'center',justifyContent:'center'}}>
         <Link href='/'>
           <Typography variant='h4' sx={{opacity:0.8,":hover":{opacity:1}}}>Aureon</Typography>
          </Link>
          <Link href='/'>
            <MenuItem sx={{opacity:0.8,":hover":{opacity:1}}}>Living</MenuItem>
          </Link>
          <Link href='/'>
            <MenuItem sx={{opacity:0.8,":hover":{opacity:1}}}>Dining</MenuItem>
          </Link>
          <Link href='/'>
            <MenuItem sx={{opacity:0.8,":hover":{opacity:1}}}>Bedroom</MenuItem>
            <Menu>
                <MenuItem>1</MenuItem>
            </Menu>
          </Link>
          <Link href='/'>
            <MenuItem sx={{opacity:0.8,":hover":{opacity:1}}}>Collections</MenuItem>
          </Link>
         </Box>
        </Toolbar>
    </AppBar>
  )
}
