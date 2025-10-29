'use client'
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Badge,
  Container,
  TextField,
  InputAdornment,
  Collapse,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ShoppingCart,
  Search,
  Close,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import { grey } from "@mui/material/colors";
import { motion, AnimatePresence } from "framer-motion";
import useCartStore from "../stores/useCartStore";
import Cart from "./Cart";
import { usePathname } from "next/navigation";

function NavBarNew() {
  const pathname = usePathname();
  const [isActiveMenuDrawer, setIsActiveMenuDrawer] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
  
  const {
    cartItems,
    openCartDrawer,
    isOpen,
    closeCartDrawer,
    cartTotalBalance,
    products,
  } = useCartStore();

  const toggleMenuDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsActiveMenuDrawer(open);
  };

  const toggleExpandedMenu = (menuName) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  // Search functionality
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length > 2) {
      const allProducts = [
        ...products.sofas,
        ...products.chairs,
        ...products.sideTables,
        ...products.coffeeTables,
        ...products.diningTables,
        ...products.sideBoards,
        ...products.diningChairs,
        ...products.beds,
        ...products.nightstands
      ];

      const filtered = allProducts.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );

      setSearchResults(filtered.slice(0, 5));
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
    setTimeout(() => {
      setShowSearchResults(false);
    }, 200);
  };

  const handleClickOutside = (event) => {
    if (searchFocused && !event.target.closest('.search-container')) {
      setShowSearchResults(false);
      setSearchFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [searchFocused]);

  // Close drawer when route changes
  useEffect(() => {
    if (pathname) {
      setIsActiveMenuDrawer(false);
    }
  }, [pathname]);

  const menuItems = [
    {
      name: 'Living',
      href: '/living',
      submenu: [
        { name: 'Sofas', href: '/living/sofas' },
        { name: 'Chairs', href: '/living/chairs' },
        { name: 'Coffee Tables', href: '/living/coffee-tables' },
        { name: 'Side Tables', href: '/living/side-tables' },
      ]
    },
    {
      name: 'Dining',
      href: '/dining',
      submenu: [
        { name: 'Dining Chairs', href: '/dining/dining-chairs' },
        { name: 'Dining Tables', href: '/dining/dining-tables' },
        { name: 'Sideboards', href: '/dining/sideboards' },
      ]
    },
    {
      name: 'Bedroom',
      href: '/bedroom',
      submenu: [
        { name: 'Beds', href: '/bedroom/beds' },
        { name: 'Nightstands', href: '/bedroom/nightstands' },
      ]
    },
    {
      name: 'Collections',
      href: '/collections',
      submenu: [
        { name: 'New Arrivals', href: '/collections/new-arrivals' },
        { name: 'Fall 2025', href: '/collections/fall-2025' },
        { name: 'Winter 2025', href: '/collections/winter-2025' },
      ]
    },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "primary.main",
          color: "primary.light",
          boxShadow: "none",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          p: 0,
          py: 0,
          px: 0.5,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              minHeight: "64px",
              px: { xs: 1, sm: 2 },
            }}
          >
            {/* Logo */}
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontWeight: 300,
                letterSpacing: { xs: ".6rem", xl: ".8rem" },
                minWidth: { xs: "200px", xl: "280px" },
                fontSize: { xs: "1.6rem", xl: "1.8rem" },
                mr: 0,
                ml: { xs: 2, xl: 0 },
                p: 3,
              }}
            >
              <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
                AUREON
              </Link>
            </Typography>

            {/* Desktop Navigation */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: 2,
                alignItems: "center",
              }}
            >
              {menuItems.map((item) => (
                <Box
                  key={item.name}
                  sx={{
                    position: "relative",
                    "&:hover .dropdown-menu": {
                      display: "block",
                    },
                  }}
                >
                  <Link
                    href={item.href}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      transition: "all 0.2s ease-in-out",
                      display: "block",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                    }}
                  >
                    <Typography variant="body1" fontWeight={400}>
                      {item.name}
                    </Typography>
                  </Link>

                  {/* Dropdown Menu */}
                  <Box
                    className="dropdown-menu"
                    sx={{
                      display: "none",
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      backgroundColor: "rgba(0,0,0,0.9)",
                      backdropFilter: "blur(10px)",
                      borderRadius: 2,
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                      minWidth: "200px",
                      zIndex: 1000,
                      py: 1,
                      mt: 1,
                    }}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          display: "block",
                        }}
                      >
                        <Box
                          sx={{
                            px: 2,
                            py: 1.5,
                            transition: "all 0.2s ease-in-out",
                            "&:hover": {
                              backgroundColor: "rgba(255,255,255,0.1)",
                            },
                          }}
                        >
                          <Typography variant="body2" fontWeight={400}>
                            {subItem.name}
                          </Typography>
                        </Box>
                      </Link>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Search and Cart */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* Search Bar */}
              <Box className="search-container" sx={{ position: "relative" }}>
                <TextField
                  variant="standard"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  sx={{
                    width: { xs: "120px", sm: "150px", md: "200px" },
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "rgba(255,255,255,0.3)",
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "rgba(255,255,255,0.6)",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "rgba(255,255,255,0.9)",
                      transform: searchFocused ? "scaleX(1)" : "scaleX(0)",
                      transition: "transform 0.2s ease-in-out",
                    },
                    "& input": {
                      color: "rgba(255,255,255,0.9)",
                      fontSize: "0.9rem",
                    },
                    "& input::placeholder": {
                      color: "rgba(255,255,255,0.5)",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.2rem" }} />
                      </InputAdornment>
                    ),
                  }}
                />

                {/* Search Results */}
                <AnimatePresence>
                  {showSearchResults && searchResults.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{
                        duration: 0.2,
                        ease: [0.16, 1, 0.3, 1],
                        staggerChildren: 0.05,
                      }}
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        backgroundColor: "rgba(0,0,0,0.9)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "8px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                        zIndex: 1000,
                        marginTop: "8px",
                        padding: "8px 0",
                        maxHeight: "300px",
                        overflowY: "auto",
                      }}
                    >
                      {searchResults.map((product, index) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.12,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          style={{
                            padding: "12px 16px",
                            cursor: "pointer",
                            transition: "background-color 0.2s ease-in-out",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                          }}
                        >
                          <Link
                            href={`/${product.category}/${product.productType}/${product.id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                              <Box sx={{ width: 40, height: 40, position: "relative" }}>
                                <Image
                                  src={product.image}
                                  alt={product.title}
                                  fill
                                  style={{ objectFit: "cover", borderRadius: "4px" }}
                                />
                              </Box>
                              <Box sx={{ flex: 1 }}>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontWeight: 500,
                                    color: "rgba(255,255,255,0.9)",
                                    whiteSpace: "nowrap",
                                    transition: "color 0.2s ease-in-out",
                                  }}
                                >
                                  {product.title}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: "rgba(255,255,255,0.7)",
                                    transition: "color 0.2s ease-in-out",
                                  }}
                                >
                                  USD {parseInt(product.price).toLocaleString('de-DE')}
                                </Typography>
                              </Box>
                            </Box>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>

              {/* Cart Icon */}
              <IconButton
                color="inherit"
                onClick={openCartDrawer}
                sx={{
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                <Badge badgeContent={cartItems.length} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>

              {/* Mobile Menu Button */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleMenuDrawer(true)}
                sx={{
                  display: { xs: "block", md: "none" },
                  ml: 1,
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={isActiveMenuDrawer}
        onClose={toggleMenuDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "primary.main",
            color: "primary.light",
            width: "280px",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <Typography variant="h5" fontWeight={300}>
              Menu
            </Typography>
            <IconButton onClick={toggleMenuDrawer(false)} color="inherit">
              <Close />
            </IconButton>
          </Box>

          {menuItems.map((item) => (
            <Box key={item.name} sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => toggleExpandedMenu(item.name)}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                }}
              >
                <ListItemText primary={item.name} />
                {expandedMenus[item.name] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              
              <Collapse in={expandedMenus[item.name]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.submenu.map((subItem) => (
                    <ListItemButton
                      key={subItem.name}
                      component={Link}
                      href={subItem.href}
                      sx={{
                        pl: 4,
                        borderRadius: 1,
                        mb: 0.5,
                      }}
                      onClick={() => setIsActiveMenuDrawer(false)}
                    >
                      <ListItemText primary={subItem.name} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </Box>
          ))}
        </Box>
      </Drawer>

      {/* Cart Drawer */}
      <Cart />
    </>
  );
}

export default NavBarNew;

