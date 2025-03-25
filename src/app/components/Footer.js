"use client"
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, Grid, IconButton, Typography,useTheme } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
    component="footer"
    sx={{
      backgroundColor: "#1a1a1a", // Dark background for contrast
      color: "#fff",
      padding: { xs: 2, md: 4 }, // Responsive padding (smaller on mobile, larger on desktop)
      // borderTop: "1px solid rgba(255, 255, 255, 0.1)", // Subtle top border
    }}
  >
    <Box>
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        {/* Company Info Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h4" gutterBottom>
            Aureon
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Experience the rich tradition of authentic Italian cuisine, where
            every pizza is handcrafted with the finest ingredients, baked to
            perfection, and served with passion. A taste of Italy in every
            bite.
          </Typography>
          <Typography variant="body2">
            Contact Us: info@aureon.com | (555) 123-4567
          </Typography>
          <Typography variant="body2">
            123 Main Street, City, State, 12345
          </Typography>
        </Grid>

        {/* Navigation Links Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Quick Links
          </Typography>
          <Box>
            <Link
              href="/properties"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              Our History
            </Link>
            <Link
              href="/buy"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              Contact
            </Link>
            <Link
              href="/rent"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              Join Us
            </Link>
          </Box>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Connect With Us
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#fff",
                "&:hover": { color: theme.palette.primary.main },
              }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#fff",
                "&:hover": { color: theme.palette.primary.main },
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#fff",
                "&:hover": { color: theme.palette.primary.main },
              }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#fff",
                "&:hover": { color: theme.palette.primary.main },
              }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Box
        sx={{
          mt: 4,
          textAlign: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          pt: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "rgba(255, 255, 255, 0.7)" }}
        >
          © {new Date().getFullYear()} Aureon. All rights reserved. |
          <Link
            href="/terms"
            color="inherit"
            underline="hover"
            sx={{ ml: 1 }}
          >
            Terms of Service
          </Link>{" "}
          |
          <Link
            href="/privacy"
            color="inherit"
            underline="hover"
            sx={{ ml: 1 }}
          >
            Privacy Policy
          </Link>
        </Typography>
      </Box>
    </Box>
  </Box>
  )
}
