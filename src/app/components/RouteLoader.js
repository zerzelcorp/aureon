'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { CircularProgress, Box, LinearProgress, Typography } from '@mui/material';
import { useRouteLoader } from '../stores/useRouteLoader';
import {useState, useEffect} from 'react'

export default function RouteLoader(){
  const { isNavigating } = useRouteLoader();
  const [showLoader, setShowLoader] = useState(false);
  const [loaderStartTime, setLoaderStartTime] = useState(null);

  useEffect(() => {
    if (isNavigating) {
      setLoaderStartTime(Date.now());
      // Only show loader if navigation takes more than 150ms (increased threshold)
      const timeout = setTimeout(() => {
        setShowLoader(true);
      }, 150); // Increased from 100ms to 150ms
      
      return () => clearTimeout(timeout);
    } else {
      // If loader was shown, ensure minimum display time
      if (showLoader && loaderStartTime) {
        const elapsedTime = Date.now() - loaderStartTime;
        const minDisplayTime = 250; // Increased minimum display time
        const remainingTime = Math.max(0, minDisplayTime - elapsedTime);
        
        const timeout = setTimeout(() => {
          setShowLoader(false);
          setLoaderStartTime(null);
        }, remainingTime);
        
        return () => clearTimeout(timeout);
      } else {
        setShowLoader(false);
        setLoaderStartTime(null);
      }
    }
  }, [isNavigating, showLoader, loaderStartTime]);

  return (
    <AnimatePresence>
      {showLoader && (
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }} // Faster fade in/out
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
            transition={{ type: 'spring', stiffness: 400, damping: 25 }} // Faster spring animation
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