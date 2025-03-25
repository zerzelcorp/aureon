'use client';
import Link from 'next/link';
import { useRouteLoader } from '../stores/useRouteLoader';

export default function AnimatedLink({ href, children, ...props }) {
  const { startNavigation } = useRouteLoader();

  return (
    <Link 
      href={href}
      {...props}
      onClick={() => startNavigation()}
    >
      {children}
    </Link>
  );
}