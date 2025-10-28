"use client";
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { theme, darkTheme} from '../theme'; 
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouteLoader } from '../stores/useRouteLoader';

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const { startNavigation,stopNavigation } = useRouteLoader();
  const [navigationStartTime, setNavigationStartTime] = useState(null);

// Handle navigation start
useEffect(() => {
  const handleClick = (e) => {
    const link = e.target.closest('a[href]');
    if (link && link.getAttribute('href')?.startsWith('/')) {
      const href = link.getAttribute('href');
      // Don't show loader for home page navigation
      if (href === '/' || href === '/home') {
        return; // Skip loader for home page
      }
      setNavigationStartTime(Date.now());
      startNavigation();
    }
  };

  document.addEventListener('click', handleClick);
  return () => document.removeEventListener('click', handleClick);
}, [startNavigation]);

// Handle navigation completion/cleanup
useEffect(() => {
  if (!navigationStartTime) return;
  
  const elapsedTime = Date.now() - navigationStartTime;
  const minDisplayTime = 300; // Minimum 300ms to prevent flickering
  
  const remainingTime = Math.max(0, minDisplayTime - elapsedTime);
  
  const timeout = setTimeout(() => {
    stopNavigation();
    setNavigationStartTime(null);
  }, remainingTime);
  
  return () => clearTimeout(timeout);
}, [pathname, stopNavigation, navigationStartTime]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouterCacheProvider>
        {children}
      </AppRouterCacheProvider>
    </ThemeProvider>
  );
}