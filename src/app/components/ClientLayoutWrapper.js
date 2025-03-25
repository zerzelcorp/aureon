"use client";
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { theme, darkTheme} from '../theme'; 
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRouteLoader } from '../stores/useRouteLoader';

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const { startNavigation,stopNavigation } = useRouteLoader();

// Handle navigation start
useEffect(() => {
  const handleClick = (e) => {
    const link = e.target.closest('a[href]');
    if (link && link.getAttribute('href')?.startsWith('/')) {
      startNavigation();
    }
  };

  document.addEventListener('click', handleClick);
  return () => document.removeEventListener('click', handleClick);
}, [startNavigation]);

// Handle navigation completion/cleanup
useEffect(() => {
  // This runs when pathname changes (navigation completes)
  stopNavigation();
  
  // Cleanup function runs before next navigation starts
  return () => {
    // Optional: Add a small delay to prevent flicker on fast navigation
    const timeout = setTimeout(stopNavigation, 100);
    return () => clearTimeout(timeout);
  };
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