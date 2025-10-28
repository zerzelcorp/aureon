"use client";
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import { ShoppingCart, Search } from "@mui/icons-material";
import useCartStore from "../stores/useCartStore";
import Cart from "./Cart";
import { Badge, Divider, Drawer, List, ListItemButton, TextField, InputAdornment } from "@mui/material";
import { grey } from "@mui/material/colors";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const pages = [
  {
    title: "New Arrivals",
    path: "/new-arrivals",
  },
  { title: "Chairs", path: "/" },
  { title: "Couchs", path: "/" },
  { title: "Exclusive", path: "/" },
  { title: "Indor", path: "/" },
  { title: "Outdoor", path: "/" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  //Centralized Dropdown Menu State
  const [activeMenu, setActiveMenu] = useState(null); // 'living', 'dining', etc.
  const [anchorEl, setAnchorEl] = useState(null);

  // Search functionality
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const { openCartDrawer, isOpen, cartItems, data, sofas, chairs, products, sideTables, coffeeTables, diningTables, sideBoards, diningChairs, beds, nightstands } = useCartStore();
  const [isActiveMenuDrawer, setOpenDrawerMenu] = useState(false);

  const toggleMenuDrawer = (newOpen) => () => {
    setOpenDrawerMenu(newOpen);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Search functionality
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    
    if (query.length > 2) {
      const allProducts = [
        ...sofas,
        ...chairs,
        ...sideTables,
        ...coffeeTables,
        ...diningTables,
        ...sideBoards,
        ...diningChairs,
        ...beds,
        ...nightstands
      ];
      
      const filtered = allProducts.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      
      setSearchResults(filtered.slice(0, 5)); // Limit to 5 results
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const handleSearchFocus = () => {
    setSearchFocused(true);
    if (searchQuery.length > 2) {
      setShowSearchResults(true);
    }
  };

  const handleSearchBlur = () => {
    setSearchFocused(false);
    // Delay hiding results to allow clicking on them
    setTimeout(() => {
      setShowSearchResults(false);
    }, 200);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.search-container')) {
      setShowSearchResults(false);
      setSearchFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page or filter products
      console.log('Searching for:', searchQuery);
      setShowSearchResults(false);
    }
  };

  useEffect(() => {
    console.log("clicked", openCartDrawer);
    console.log("drawer is open:", isOpen);
  }, [openCartDrawer]);

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", py: 0, px: 0.5 }}>
      <Cart />
      <Container maxWidth="xl" sx={{ m: 0, p: { xs: 0 } }}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: {
              xs: "space-between",
              sm: "space-between",
              md: "space-between",
              lg: "center",
            },
            alignItems: "center",
            gap: { xs: 0, lg: 0.5 },
            // backgroundColor:'red'
          }}
        >
          <Link href="/">
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 0,
                p: 3,
                display: { xs: "none", md: "flex" },
                letterSpacing: ".8rem",
                color: "inherit",
                textDecoration: "none",
                minWidth: "280px",
                fontSize: "1.8rem",
                fontWeight: 300,
              }}
            >
              AUREON
            </Typography>
          </Link>
          {/* SMALL SCREEN MENU */}
          <AnimatePresence>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              style={{ width: "auto" }}
            >
              <Box
                sx={{
                  display: { xs: "flex", sm: "none", md: "none", lg: "none" },
                  alignItems: "center",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleMenuDrawer(true)}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  sx={{
                    width: "auto",
                    "& .MuiDrawer-paper": {
                      backgroundColor: "primary.main",
                      color: "primary.light",
                      minHeight: "100vh",
                      width: {
                        xs: "60vw",
                        sm: "50vw",
                        md: "60vw",
                        lg: "30vw",
                        xl: "20vw",
                      },
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      overflowX: "auto",
                      "&::-webkit-scrollbar": {
                        width: "10px",
                      },
                      "&::-webkit-scrollbar-button": {
                        display: "none",
                        height: 0,
                        width: 0,
                      },
                      "&::-webkit-scrollbar-track": {
                        backgroundColor: (theme) =>
                          `${theme.palette.grey[900]} transparent`,
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "black",
                        borderRadius: "10px",
                        backgroundClip: "content-box",
                        transition: "all 300ms easeInOut",
                        "&:hover": {
                          backgroundColor: (theme) =>
                            `${theme.palette.grey[800]}`,
                        },
                      },
                    },
                  }}
                  open={isActiveMenuDrawer}
                  onClose={toggleMenuDrawer(false)}
                >
                  <List
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h4"
                      color="main.light"
                      pt={4}
                      pl={2}
                      mb={1}
                    >
                      Living
                    </Typography>
                    <Divider
                      sx={{
                        borderBottomWidth: "1px",
                        width: "80%",
                        justifyContent: "center",
                        borderColor: grey[600],
                        mb: 2,
                      }}
                    />
                    <Link href='/living/chairs'>
                    <ListItemButton
                      sx={{
                        transition: "all 200ms ease-in-out",
                        ":hover": { backgroundColor: "black" },
                      }}
                    >
                      Chairs
                    </ListItemButton>
                    </Link>
                    <Link href='/living/sofas'>
                    <ListItemButton
                      sx={{
                        transition: "all 200ms ease-in-out",
                        ":hover": { backgroundColor: "black" },
                      }}
                    >
                      Sofa
                    </ListItemButton>
                    </Link>
                    <Link href='/living/coffee-tables'>
                     <ListItemButton
                      sx={{
                        transition: "all 200ms ease-in-out",
                        ":hover": { backgroundColor: "black" },
                      }}
                    >
                      Coffee Tables
                     </ListItemButton>
                    </Link>
                    <Link href='/living/side-tables'>
                     <ListItemButton
                      sx={{
                        transition: "all 200ms ease-in-out",
                        ":hover": { backgroundColor: "black" },
                      }}
                    >
                      Side Tables
                     </ListItemButton>
                    </Link>
                  </List>
                  <List
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h4"
                      color="main.light"
                      pt={4}
                      pl={2}
                      mb={1}
                    >
                      Dining
                    </Typography>
                    <Divider
                      sx={{
                        borderBottomWidth: "1px",
                        width: "80%",
                        justifyContent: "center",
                        borderColor: grey[600],
                        mb: 2,
                      }}
                    />
                    <Link href='/dining/dining-chairs'>
                    <ListItemButton
                      sx={{
                        transition: "all 200ms ease-in-out",
                        ":hover": { backgroundColor: "black" },
                      }}
                    >
                      Dining Chairs
                    </ListItemButton>
                    </Link>
                    <Link href='/dining/dining-tables'>
                    <ListItemButton
                      sx={{
                        transition: "all 200ms ease-in-out",
                        ":hover": { backgroundColor: "black" },
                      }}
                    >
                      Dining Tables
                    </ListItemButton>
                    </Link>
                    <Link href='/dining/sideboards'>
                    <ListItemButton
                      sx={{
                        transition: "all 200ms ease-in-out",
                        ":hover": { backgroundColor: "black" },
                      }}
                    >
                      Sideboards
                    </ListItemButton>
                    </Link>
                  </List>
                  <List
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h4"
                      color="main.light"
                      pt={4}
                      pl={2}
                      mb={1}
                    >
                      Bedroom
                    </Typography>
                    <Divider
                      sx={{
                        borderBottomWidth: "1px",
                        width: "80%",
                        justifyContent: "center",
                        borderColor: grey[600],
                        mb: 2,
                      }}
                    />
                    <Link href='/bedroom/beds'>
                    <ListItemButton
                      sx={{
                        transition: "all 200ms ease-in-out",
                        ":hover": { backgroundColor: "black" },
                      }}
                    >
                      Beds
                    </ListItemButton>
                    </Link>
                    <Link href='/bedroom/nightstands'> 
                    <ListItemButton
                      sx={{
                        transition: "all 200ms ease-in-out",
                        ":hover": { backgroundColor: "black" },
                      }}
                    >
                      Nightstands
                    </ListItemButton>
                    </Link>
                  </List>
                  <List
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h4"
                      color="main.light"
                      pt={4}
                      pl={2}
                      mb={1}
                    >
                      Collections
                    </Typography>
                    <Divider
                      sx={{
                        borderBottomWidth: "1px",
                        width: "80%",
                        justifyContent: "center",
                        borderColor: grey[600],
                        mb: 2,
                      }}
                    />
                    <Link href='/collections/new-arrivals'>
                    <ListItemButton
                      sx={{
                        transition: "all 200ms ease-in-out",
                        ":hover": { backgroundColor: "black" },
                      }}
                    >
                      New Arrivals
                    </ListItemButton>
                    </Link>
                  </List>
                </Drawer>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  <Link href="/living">
                    <MenuItem>living</MenuItem>
                  </Link>
                  <Link href="/dining">
                    <MenuItem>Dining</MenuItem>
                  </Link>
                  <Link href="/bedroom">
                    <MenuItem>Bedroom</MenuItem>
                  </Link>
                  {/* {pages.map((page) => (
                <MenuItem key={page.title}>
                  <Link href={page.path} style={{ textAlign: 'center' }}>{page.title}</Link>
                </MenuItem>
              ))} */}
                </Menu>
              </Box>
            </motion.div>
          </AnimatePresence>
          {/*TITLE SMALL SCREEN */}
          <Box
            sx={{
              flexGrow: { xs: 1, lg: 0, xl: 0 },
              textAlign: "center",
              display: { xs: "flex", md: "none", lg: "none" },
            }}
          >
            <Link href="/">
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: { xs: 0, xl: 0.5 },
                  flexGrow: 1,
                  ml: 2,
                  letterSpacing: ".6rem",
                  color: "inherit",
                  fontSize: "1.6rem",
                  fontWeight: 300,
                  minWidth: "200px",
                }}
              >
                AUREON
              </Typography>
            </Link>
          </Box>

          {/* DEFAULT BIG MENU LINKS */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" }, gap: 2 }}>
            <MenuItem
              sx={{ 
                cursor: "pointer",
                px: 1,
                py: 1,
                borderRadius: 1,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.05)',
                }
              }}
              onMouseEnter={(e) => {
                setActiveMenu("living");
                setAnchorEl(e.currentTarget);
              }}
            >
              <Link href="/living">Living</Link>
              <Menu
                anchorEl={anchorEl}
                open={activeMenu === "living"}
                onClose={() => {
                  setActiveMenu(null);
                  setAnchorEl(null);
                }}
                MenuListProps={{
                  onMouseEnter: () => {
                    setActiveMenu("living");
                  },
                  onMouseLeave: () => {
                    setTimeout(() => {
                      setActiveMenu(null);
                      setAnchorEl(null);
                    }, 100);
                  },
                  sx: { py: 1, px: 0.5 }
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                sx={{
                  mt: 1,
                  '& .MuiPaper-root': {
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    minWidth: '180px',
                  }
                }}
                transitionDuration={{ enter: 200, exit: 150 }}
              >
                <MenuItem 
                  component={Link} 
                  href="/living/chairs"
                  sx={{
                    py: 1.5,
                    px: 2,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateX(4px)',
                    }
                  }}
                >
                  Chairs
                </MenuItem>
                <MenuItem 
                  component={Link} 
                  href="/living/sofas"
                  sx={{
                    py: 1.5,
                    px: 2,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateX(4px)',
                    }
                  }}
                >
                  Sofas
                </MenuItem>
                <MenuItem 
                  component={Link} 
                  href="/living/side-tables"
                  sx={{
                    py: 1.5,
                    px: 2,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateX(4px)',
                    }
                  }}
                >
                  Side Tables
                </MenuItem>
                <MenuItem 
                  component={Link} 
                  href="/living/coffee-tables"
                  sx={{
                    py: 1.5,
                    px: 2,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateX(4px)',
                    }
                  }}
                >
                  Coffee Tables
                </MenuItem>
              </Menu>
            </MenuItem>
            <MenuItem
              sx={{ 
                cursor: "pointer",
                px: 1,
                py: 1,
                borderRadius: 1,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.05)',
                }
              }}
              onMouseEnter={(e) => {
                setActiveMenu("dining");
                setAnchorEl(e.currentTarget);
              }}
            >
              <Link href="/dining">Dining</Link>
              <Menu
                anchorEl={anchorEl}
                open={activeMenu === "dining"}
                onClose={() => {
                  setActiveMenu(null);
                  setAnchorEl(null);
                }}
                MenuListProps={{
                  onMouseEnter: () => {
                    setActiveMenu("dining");
                  },
                  onMouseLeave: () => {
                    setTimeout(() => {
                      setActiveMenu(null);
                      setAnchorEl(null);
                    }, 100);
                  },
                  sx: { py: 1, px: 0.5 }
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                sx={{
                  mt: 1,
                  '& .MuiPaper-root': {
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    minWidth: '180px',
                  }
                }}
                transitionDuration={{ enter: 200, exit: 150 }}
              >
                <MenuItem 
                  component={Link} 
                  href="/dining/dining-chairs"
                  sx={{
                    py: 1.5,
                    px: 2,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateX(4px)',
                    }
                  }}
                >
                  Dining Chairs
                </MenuItem>
                <MenuItem 
                  component={Link} 
                  href="/dining/dining-tables"
                  sx={{
                    py: 1.5,
                    px: 2,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateX(4px)',
                    }
                  }}
                >
                  Dining Tables
                </MenuItem>
                <MenuItem 
                  component={Link} 
                  href="/dining/sideboards"
                  sx={{
                    py: 1.5,
                    px: 2,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateX(4px)',
                    }
                  }}
                >
                  Sideboards
                </MenuItem>
              </Menu>
            </MenuItem>
            <MenuItem
              sx={{ 
                cursor: "pointer",
                px: 1,
                py: 1,
                borderRadius: 1,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.05)',
                }
              }}
              onMouseEnter={(e) => {
                setActiveMenu("bedroom");
                setAnchorEl(e.currentTarget);
              }}
            >
              <Link href="/bedroom">Bedroom</Link>
              <Menu
                anchorEl={anchorEl}
                open={activeMenu === "bedroom"}
                onClose={() => {
                  setActiveMenu(null);
                  setAnchorEl(null);
                }}
                MenuListProps={{
                  onMouseEnter: () => {
                    setActiveMenu("bedroom");
                  },
                  onMouseLeave: () => {
                    setTimeout(() => {
                      setActiveMenu(null);
                      setAnchorEl(null);
                    }, 100);
                  },
                  sx: { py: 1, px: 0.5 }
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                sx={{
                  mt: 1,
                  '& .MuiPaper-root': {
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    minWidth: '180px',
                  }
                }}
                transitionDuration={{ enter: 200, exit: 150 }}
              >
                <MenuItem 
                  component={Link} 
                  href="/bedroom/beds"
                  sx={{
                    py: 1.5,
                    px: 2,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateX(4px)',
                    }
                  }}
                >
                  Beds
                </MenuItem>
                <MenuItem 
                  component={Link} 
                  href="/bedroom/nightstands"
                  sx={{
                    py: 1.5,
                    px: 2,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateX(4px)',
                    }
                  }}
                >
                  Nightstands
                </MenuItem>
              </Menu>
            </MenuItem>
            <MenuItem
              sx={{ 
                cursor: "pointer",
                px: 1,
                py: 1,
                borderRadius: 1,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.05)',
                }
              }}
              onMouseEnter={(e) => {
                setActiveMenu("collections");
                setAnchorEl(e.currentTarget);
              }}
            >
              <Link href="/collections">Collections</Link>
              <Menu
                anchorEl={anchorEl}
                open={activeMenu === "collections"}
                onClose={() => {
                  setActiveMenu(null);
                  setAnchorEl(null);
                }}
                MenuListProps={{
                  onMouseEnter: () => {
                    setActiveMenu("collections");
                  },
                  onMouseLeave: () => {
                    setTimeout(() => {
                      setActiveMenu(null);
                      setAnchorEl(null);
                    }, 100);
                  },
                  sx: { py: 1, px: 0.5 }
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                sx={{
                  mt: 1,
                  '& .MuiPaper-root': {
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    minWidth: '180px',
                  }
                }}
                transitionDuration={{ enter: 200, exit: 150 }}
              >
                <MenuItem 
                  component={Link} 
                  href="/collections/new-arrivals"
                  sx={{
                    py: 1.5,
                    px: 2,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateX(4px)',
                    }
                  }}
                >
                  New Arrivals
                </MenuItem>
              </Menu>
            </MenuItem>
            {/* <MenuItem
              sx={{
                cursor: "pointer",
                color: "text.muted",
                ":hover": { color: "text.primary" },
              }}
            >
              <Link href="/services">Services</Link>
            </MenuItem> */}
            {/* {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))} */}
          </Box>
          {/* SEARCH BAR AND CART ICON */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Minimalist Search Bar */}
            <Box className="search-container" sx={{ position: "relative" }}>
              <TextField
                variant="standard"
                placeholder="Search furniture..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                sx={{
                  width: "200px",
                  '& .MuiInput-underline:before': {
                    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'rgba(255, 255, 255, 0.9)',
                    transform: searchFocused ? 'scaleX(1)' : 'scaleX(0)',
                    transition: 'transform 0.2s ease-in-out',
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                    fontSize: '0.9rem',
                    '&::placeholder': {
                      color: 'rgba(255, 255, 255, 0.5)',
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.2rem' }} />
                    </InputAdornment>
                  ),
                }}
              />
              
              {/* Search Results Dropdown */}
              <AnimatePresence>
                {showSearchResults && searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ 
                      duration: 0.2, 
                      ease: [0.16, 1, 0.3, 1],
                      staggerChildren: 0.05
                    }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      right: 0,
                      zIndex: 1000,
                      minWidth: '300px'
                    }}
                  >
                    <Box sx={{
                      backgroundColor: 'rgba(0, 0, 0, 0.95)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      mt: 1,
                      maxHeight: '400px',
                      overflowY: 'auto'
                    }}>
                      {searchResults.map((product, index) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.12,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                        >
                          <Link href={`/${product.category}/${product.productType}/${product.id}`}>
                            <Box sx={{
                              p: 2,
                              borderBottom: '1px solid rgba(255,255,255,0.1)',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease-in-out',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                transform: 'translateX(4px)',
                              },
                              '&:last-child': {
                                borderBottom: 'none'
                              }
                            }}>
                              <Box sx={{
                                width: 50,
                                height: 50,
                                borderRadius: 1,
                                overflow: 'hidden',
                                flexShrink: 0,
                                transition: 'transform 0.2s ease-in-out',
                                '&:hover': {
                                  transform: 'scale(1.05)'
                                }
                              }}>
                                <Image
                                  src={product.image}
                                  alt={product.title}
                                  width={50}
                                  height={50}
                                  style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                  }}
                                />
                              </Box>
                              <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Typography variant="body2" sx={{ 
                                  color: 'white', 
                                  fontWeight: 500,
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap',
                                  transition: 'color 0.2s ease-in-out'
                                }}>
                                  {product.title}
                                </Typography>
                <Typography variant="caption" sx={{ 
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'color 0.2s ease-in-out'
                }}>
                  USD {parseInt(product.price).toLocaleString('de-DE')}
                </Typography>
                              </Box>
                            </Box>
                          </Link>
                        </motion.div>
                      ))}
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>

            {/* CART ICON */}
            <IconButton
              onClick={openCartDrawer}
              sx={{
                opacity: 0.6,
                transition: "all 300ms ease-in-out",
                ":hover": { opacity: 1 },
              }}
            >
              <Badge
                badgeContent={cartItems.length}
                color="error"
                overlap="circular"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <ShoppingCart color="primary.main" fontSize="medium" />
              </Badge>
            </IconButton>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
