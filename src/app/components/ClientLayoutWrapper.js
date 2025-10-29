"use client";
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { theme, darkTheme} from '../theme'; 
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useRouteLoader } from '../stores/useRouteLoader';

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const { startNavigation, stopNavigation } = useRouteLoader();
  const previousPathname = useRef(pathname);
  const navigationStartTime = useRef(null);

// Handle navigation start
useEffect(() => {
  const handleClick = (e) => {
    const link = e.target.closest('a[href]');
    if (link && link.getAttribute('href')?.startsWith('/')) {
      const href = link.getAttribute('href');
      // Don't show loader if clicking on the current page
      if (href === pathname || href === '/' || href === '/home') {
        return;
      }
      // Start navigation immediately
      navigationStartTime.current = Date.now();
      startNavigation();
    }
  };

  document.addEventListener('click', handleClick, true); // Use capture phase
  return () => document.removeEventListener('click', handleClick, true);
}, [startNavigation, pathname]);

// Handle navigation completion/cleanup
useEffect(() => {
  // Only process if pathname actually changed
  if (pathname === previousPathname.current) return;
  
  // If we started navigation, wait for page to be fully ready
  if (navigationStartTime.current) {
    let timeout;
    
    // Wait for multiple frames and page to be interactive
    const hideLoader = () => {
      // Additional check: ensure document is ready
      if (document.readyState === 'complete') {
        const elapsedTime = Date.now() - navigationStartTime.current;
        const minDisplayTime = 500; // Increased minimum display time
        const remainingTime = Math.max(0, minDisplayTime - elapsedTime);
        
        timeout = setTimeout(() => {
          stopNavigation();
          navigationStartTime.current = null;
        }, remainingTime);
      } else {
        // If page not ready, wait a bit more
        timeout = setTimeout(hideLoader, 100);
      }
    };

    // Wait for multiple render frames to ensure DOM is updated
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          hideLoader();
        });
      });
    });
    
    previousPathname.current = pathname;
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  } else {
    previousPathname.current = pathname;
  }
}, [pathname, stopNavigation]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouterCacheProvider>
        {children}
      </AppRouterCacheProvider>
    </ThemeProvider>
  );
}