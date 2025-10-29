'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { CircularProgress, Box, LinearProgress, Typography } from '@mui/material';
import { useRouteLoader } from '../stores/useRouteLoader';
import {useState, useEffect, useRef} from 'react'

export default function RouteLoader(){
  const { isNavigating } = useRouteLoader();
  const [showLoader, setShowLoader] = useState(false);
  const loaderStartTimeRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  useEffect(() => {
    if (isNavigating) {
      // Clear any pending hide timeout
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
      
      // Show loader immediately when navigation starts - no delay
      if (!showLoader) {
        loaderStartTimeRef.current = Date.now();
        setShowLoader(true);
      }
    } else {
      // When navigation stops, wait for page to be fully ready
      if (showLoader) {
        const hideAfterReady = () => {
          // Check if document is ready and wait additional frames
          if (document.readyState === 'complete') {
            const elapsedTime = loaderStartTimeRef.current 
              ? Date.now() - loaderStartTimeRef.current 
              : 0;
            // Minimum display time to ensure smooth transition
            const minDisplayTime = 500;
            const remainingTime = Math.max(0, minDisplayTime - elapsedTime);
            
            // Additional frame wait to ensure DOM is fully rendered
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                hideTimeoutRef.current = setTimeout(() => {
                  setShowLoader(false);
                  loaderStartTimeRef.current = null;
                  hideTimeoutRef.current = null;
                }, remainingTime);
              });
            });
          } else {
            // Page not ready yet, wait a bit more
            hideTimeoutRef.current = setTimeout(hideAfterReady, 50);
          }
        };

        // Wait for multiple frames before checking
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            hideAfterReady();
          });
        });
      }
    }

    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
    };
  }, [isNavigating, showLoader]);

  return (
    <AnimatePresence mode="wait">
      {showLoader && (
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
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
            pointerEvents: 'auto', // Ensure it captures all interactions
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
}