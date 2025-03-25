'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { CircularProgress, Box, LinearProgress, Typography } from '@mui/material';
import { useRouteLoader } from '../stores/useRouteLoader';
import {useState} from 'react'

export default function RouteLoader(){
  const { isNavigating } = useRouteLoader();
  const [showLoader, setShowLoader] = useState(false);

  return (
    <AnimatePresence>
      {isNavigating && (
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(12, 12, 12)',
            zIndex: 9999,
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
          {/* <Typography variant='h5' sx={{mb:4,textAlign:'center'}}>Loading..</Typography> */}
            {/* <CircularProgress size={80} thickness={4} color='red'/> */}
            <Box sx={{ width: '80vw' }}>
              <LinearProgress size={80}/>
            </Box>
            {/* <LinearProgress size={80} thickness={4} color='red'/> */}
          </motion.div>
        </Box>
      )}
    </AnimatePresence>
  );
};