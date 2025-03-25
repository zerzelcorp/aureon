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
import { ShoppingCart } from "@mui/icons-material";
import useCartStore from "../stores/useCartStore";
import Cart from "./Cart";
import { Badge, Divider, Drawer, List, ListItemButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import { AnimatePresence, motion } from "framer-motion";

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

  const { openCartDrawer, isOpen, cartItems } = useCartStore();
  const [isActiveMenuDrawer, setOpenDrawerMenu] = useState(false);

  const toggleMenuDrawer = (newOpen) => () => {
    setOpenDrawerMenu(newOpen);
  };

  const handleHoverOpen = (event, label) => {
    setHoverAnchor((prev) => ({ ...prev, [label]: event.currentTarget }));
  };

  const handleHoverClose = (label) => {
    setHoverAnchor((prev) => ({ ...prev, [label]: null }));
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    console.log("clicked", openCartDrawer);
    console.log("drawer is open:", isOpen);
  }, [openCartDrawer]);

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", p: 1 }}>
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
            gap: { xs: 0, lg: 2 },
            // backgroundColor:'red'
          }}
        >
          <Link href="/">
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 4,
                p: 2,
                display: { xs: "none", md: "flex" },
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
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
                  mr: { xs: 0, xl: 4 },
                  flexGrow: 1,
                  ml: 5,
                  letterSpacing: ".4rem",
                  color: "inherit",
                }}
              >
                AUREON
              </Typography>
            </Link>
          </Box>
          {/* DEFAULT BIG MENU LINKS */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            <MenuItem
              sx={{ cursor: "pointer" }}
              onMouseEnter={(e) => {
                setActiveMenu("living");
                setAnchorEl(e.currentTarget);
              }}
              onMouseLeave={() => {
                setActiveMenu(null);
                setAnchorEl(null);
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
                  onMouseEnter: () => setActiveMenu("living"),
                  onMouseLeave: () => {
                    setActiveMenu(null);
                    setAnchorEl(null);
                  },
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: 0 }}
                transformOrigin={{ vertical: "top", horizontal: 0 }}
              >
                <MenuItem component={Link} href="/living/chairs">
                  Chairs
                </MenuItem>
                <MenuItem component={Link} href="/living/sofas">
                  Sofas
                </MenuItem>
                <MenuItem component={Link} href="/living/coffee-tables">
                  Coffee Tables
                </MenuItem>
              </Menu>
            </MenuItem>
            <MenuItem
              sx={{ cursor: "pointer" }}
              onMouseEnter={(e) => {
                setActiveMenu("dining");
                setAnchorEl(e.currentTarget);
              }}
              onMouseLeave={() => {
                setActiveMenu(null);
                setAnchorEl(null);
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
                  onMouseEnter: () => setActiveMenu("dining"),
                  onMouseLeave: () => {
                    setActiveMenu(null);
                    setAnchorEl(null);
                  },
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: 0 }}
                transformOrigin={{ vertical: "top", horizontal: 0 }}
              >
                <MenuItem component={Link} href="/dining/dining-chairs">
                  Dining Chairs
                </MenuItem>
                <MenuItem component={Link} href="/dining/dining-tables">
                  Dining Tables
                </MenuItem>
                <MenuItem component={Link} href="/dining/sideboards">
                  Sideboards
                </MenuItem>
              </Menu>
            </MenuItem>
            <MenuItem
              sx={{ cursor: "pointer" }}
              onMouseEnter={(e) => {
                setActiveMenu("bedroom");
                setAnchorEl(e.currentTarget);
              }}
              onMouseLeave={() => {
                setActiveMenu(null);
                setAnchorEl(null);
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
                  onMouseEnter: () => setActiveMenu("bedroom"),
                  onMouseLeave: () => {
                    setActiveMenu(null);
                    setAnchorEl(null);
                  },
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: 0 }}
                transformOrigin={{ vertical: "top", horizontal: 0 }}
              >
                <MenuItem component={Link} href="/bedroom/beds">
                  Beds
                </MenuItem>
                <MenuItem component={Link} href="/bedroom/nightstands">
                  Nightstands
                </MenuItem>
              </Menu>
            </MenuItem>
            <MenuItem
              sx={{ cursor: "pointer" }}
              onMouseEnter={(e) => {
                setActiveMenu("collections");
                setAnchorEl(e.currentTarget);
              }}
              onMouseLeave={() => {
                setActiveMenu(null);
                setAnchorEl(null);
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
                  onMouseEnter: () => setActiveMenu("collections"),
                  onMouseLeave: () => {
                    setActiveMenu(null);
                    setAnchorEl(null);
                  },
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: 0 }}
                transformOrigin={{ vertical: "top", horizontal: 0 }}
              >
                <MenuItem component={Link} href="/collections/new-arrivals">
                  New Arrivals
                </MenuItem>
                {/* <MenuItem component={Link} href="/collections/winter-2025">
                  Winter 2025
                </MenuItem>
                <MenuItem component={Link} href="/collections/fall-2025">
                  Fall 2025
                </MenuItem> */}
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
          {/* CART ICON  */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
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
