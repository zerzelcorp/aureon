"use client";
import { Add, ExpandMoreOutlined, Remove } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState, useMemo } from "react";
import useCartStore from "../stores/useCartStore";
import { grey } from "@mui/material/colors";
import { useParams, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function ProductDetail() {
  const params = useParams();
  const path = usePathname();
  const prodId = parseInt(params.id);

  const {
    cartItems,
    removeItemFromCart,
    addToCart,
    cartSubTotalBalance,
    increaseQuantity,
    decreaseQuantity,
    getItemQuantity,
    cartTotalBalance,
    data,
    chairs,
    beds,
    diningChairs,
    nightstands,
    sideBoards,
    diningTables,
    coffeeTables,
    sideTables,
    sofas,
  } = useCartStore();

  // foundedItem = data.find(item => item.id == id);
  const product = useMemo(() => {
    // Extract category from path: e.g. 'chairs' from /living/chairs/111
    const segments = path.split("/");
    const category = segments[segments.length - 2];
    console.log("Detected category:", category);

    const map = {
      chairs: chairs,
      sofas: sofas,
      beds: beds,
      "side-tables": sideTables,
      "coffee-tables": coffeeTables,
      "dining-chairs": diningChairs,
      "dining-tables": diningTables,
      sideboards: sideBoards,
      nightstands: nightstands,
    };

    const currentData = map[category] || data;
    return currentData.find((item) => item.id === prodId);
  }, [
    path,
    params,
    data,
    chairs,
    sofas,
    beds,
    sideTables,
    coffeeTables,
    diningChairs,
    diningTables,
    sideBoards,
    nightstands,
  ]);

  useEffect(() => {
    // console.log("prod detail foundedItem:", foundedItem);
    // console.log("product detail ID:", params);
    console.log("path:", path);
    console.log("product:", product);
    // console.log("cart items added from proddetail:", cartItems);
  }, []);

  if (!product) {
    return (
      <Box sx={{ p: 10, textAlign: "center" }}>
        <Typography variant="h4">Product not found 😕</Typography>
      </Box>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {product ? (
          <Box
            sx={{
              minHeight: "100vh",
              width: "100%",
              maxWidth: "1200px",
              mx: "auto",
              px: { xs: 2, sm: 4, md: 6, lg: 8 },
              py: { xs: 4, sm: 6, md: 8 },
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                },
                height: "auto",
                gap: 4,
                mt: 4,
                alignItems: "stretch",
                minHeight: { xs: "auto", md: "600px" },
              }}
            >
              {/* <Box sx={{display:'flex'}}>
         <Link href='/'>
          <Typography variant="h4" mr={2} sx={{opacity:0.6,":hover":{opacity:1}}}>{path} /</Typography>
         </Link>
          <Link href='/'>
             <Typography variant="h4" mr={2} sx={{opacity:0.6,":hover":{opacity:1}}}>{product.title}</Typography>
           </Link>
       </Box> */}
              {/* PRODUCT IMAGE */}
              <Box
                sx={{
                  order: { xs: 1, sm: 1, md: 1, lg: 1 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "60%" },
                  position: "relative",
                  pr: { lg: 6 },
                  height: { xs: "400px", sm: "500px", md: "600px" },
                  maxHeight: { xs: "400px", sm: "500px", md: "600px" },
                  minHeight: { xs: "400px", sm: "500px", md: "600px" },
                }}
              >
                <Image
                  src={product.image}
                  alt="product-image"
                  // layout="responsive"
                  // objectFit="contain"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                  // height={500}
                  // width={500}
                />
              </Box>
              {/* PRODUCT INFO */}
              <Box
                sx={{
                  order: { xs: 2, sm: 2, md: 2, lg: 2 },
                  display: "flex",
                  flexDirection: "column",
                  mt: { xs: 0 },
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "40%" },
                  pl: { lg: 4 },
                  minWidth: { lg: "350px" },
                  height: { xs: "400px", sm: "500px", md: "600px" },
                  maxHeight: { xs: "400px", sm: "500px", md: "600px" },
                  minHeight: { xs: "400px", sm: "500px", md: "600px" },
                  justifyContent: "flex-start",
                  py: { xs: 0, sm: 0, md: 0 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "column", lg: "column" },
                    justifyContent: "space-between",
                    width: "100%",
                    mb: 3,
                    alignItems: "flex-start",
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 500, mb: 2 }}>
                    {product.title}
                  </Typography>
                  <Box sx={{
                    backgroundColor: "rgba(0,0,0,0.05)",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: 2,
                    py: 2,
                    backdropFilter: "blur(10px)",
                    ml: 0,
                  }}>
                    <Typography variant="h5" sx={{ fontWeight: 500, color: "text.primary" }}>
                      USD {parseInt(product.price).toLocaleString('de-DE')}
                    </Typography>
                  </Box>
                </Box>
                
                {/* Gradient divider line */}
                <Box sx={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  mb: 2,
                }} />
                <Typography variant="body1" mt={1} sx={{ lineHeight: 1.7, mb: 3, fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}>
                  {product.description}
                </Typography>
                
                {/* Product Qualities */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
                  <Box sx={{
                    backgroundColor: "rgba(0,0,0,0.05)",
                    border: "1px solid rgba(128,128,128,0.3)",
                    borderRadius: 2,
                    px: 2,
                    py: 1,
                    backdropFilter: "blur(10px)",
                  }}>
                    <Typography variant="caption" sx={{ fontWeight: 500, color: "white" }}>
                      Pure Italian Leather
                    </Typography>
                  </Box>
                  <Box sx={{
                    backgroundColor: "rgba(0,0,0,0.05)",
                    border: "1px solid rgba(128,128,128,0.3)",
                    borderRadius: 2,
                    px: 2,
                    py: 1,
                    backdropFilter: "blur(10px)",
                  }}>
                    <Typography variant="caption" sx={{ fontWeight: 500, color: "white" }}>
                      Handcrafted
                    </Typography>
                  </Box>
                  <Box sx={{
                    backgroundColor: "rgba(0,0,0,0.05)",
                    border: "1px solid rgba(128,128,128,0.3)",
                    borderRadius: 2,
                    px: 2,
                    py: 1,
                    backdropFilter: "blur(10px)",
                  }}>
                    <Typography variant="caption" sx={{ fontWeight: 500, color: "white" }}>
                      Sustainable Materials
                    </Typography>
                  </Box>
                  <Box sx={{
                    backgroundColor: "rgba(0,0,0,0.05)",
                    border: "1px solid rgba(128,128,128,0.3)",
                    borderRadius: 2,
                    px: 2,
                    py: 1,
                    backdropFilter: "blur(10px)",
                  }}>
                    <Typography variant="caption" sx={{ fontWeight: 500, color: "white" }}>
                      5-Year Warranty
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      sm: "column",
                      md: "row",
                      lg: "column",
                    },
                    width: "100%",
                    gap: { xs: 3, sm: 3, md: 4, lg: 3 },
                    mt: { xs: 4, sm: 4, md: 6, lg: 4 },
                    mb: { xs: 4, sm: 4, md: 6, lg: 4 },
                  }}
                >
                  {/* <motion.div style={{ width: "100%" }}> */}
                    <Button
                      // component={motion.button}
                      onClick={() => addToCart(product)}
                      variant="contained"
                      // whileTap={{
                      //   scale: 0.95,
                      //   backgroundColor: "#4CAF50",
                      //   transition: { duration: 0.3 },
                      // }}
                      // animate={{
                      //   backgroundColor: 'primary.main', // Default color
                      // }}
                      // transition={{
                      //   backgroundColor: { duration: 0.3 },
                      // }}
                      sx={{
                        alignItems: "flex-start",
                        p: { xs: 1.5, sm: 1.8, md: 2 },
                        width: { xs: "100%", sm: "100%", md: "60%", lg: "100%" },
                        fontFamily: "Geist",
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        minHeight: { xs: "44px", sm: "48px", md: "52px" },
                        borderRadius: 2,
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: 4,
                        },
                      }}
                    >
                      Add To Cart
                      {/* <motion.span
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: "rgba(255, 255, 255, 0.2)",
                          borderRadius: "inherit",
                          opacity: 0,
                        }}
                        animate={{
                          opacity: [0, 0.3, 0],
                          scale: [1, 1.5],
                        }}
                        transition={{
                          duration: 0.8,
                          times: [0, 0.2, 1],
                        }}
                      /> */}
                    </Button>
                  {/* </motion.div> */}
                  {/* QUANTITY BOX */}
                  <Box
                    id="qty-box"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 4,
                      backgroundColor: "primary.dark",
                      color: "primary.light",
                      borderRadius: 2,
                      border: 1,
                      borderColor: grey[900],
                      width: { xs: "100%", sm: "100%", md: "40%", lg: "100%" },
                      minWidth: { xs: "200px", sm: "220px", md: "180px", lg: "200px" },
                      height: { xs: "48px", sm: "52px", md: "56px" },
                      px: 2,
                    }}
                  >
                    <IconButton
                      onClick={() => decreaseQuantity(product.id)}
                      sx={{ color: "#fff" }}
                    >
                      <Remove />
                    </IconButton>
                    <Typography variant="h6" sx={{ 
                      ml: 2, 
                      mr: 2, 
                      fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
                      fontWeight: 500,
                    }}>
                      {getItemQuantity(product.id)}
                    </Typography>

                    <IconButton
                      onClick={() => increaseQuantity(product.id)}
                      sx={{ color: "#fff" }}
                    >
                      <Add />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row", lg: "row" },
                width: "100%",
                gap: 4,
              }}
            >
              <Box
                id="accordions"
                pt={4}
                sx={{ width: { xs: "100%", lg: "50%" } }}
              >
                <Accordion
                  sx={{ backgroundColor: "black", color: "secondary.main" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreOutlined />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">
                      Composition, Care & Origin
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      Crafted from premium Italian leather sourced from certified tanneries, this piece features solid oak wood construction with hand-applied finishes. Each component undergoes rigorous quality control to ensure longevity and beauty. Care instructions include regular conditioning with leather cream and dusting with a soft cloth.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ backgroundColor: "black", color: "secondary.main" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreOutlined />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography component="span">
                      Check In-Store Availability
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      This item is currently available in our flagship stores in New York, Los Angeles, and Miami. Please call ahead to confirm availability and schedule a viewing appointment. Our design consultants are available to assist with measurements and styling recommendations. Store pickup is available within 2-3 business days.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ backgroundColor: "black", color: "secondary.main" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreOutlined />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography component="span">
                      Shipping, Exchanges and Returns
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      Free white-glove delivery within 50 miles of our stores. Nationwide shipping available with professional installation service. 30-day return policy for unused items in original packaging. Exchanges accepted within 60 days with receipt. All items come with comprehensive care instructions and warranty documentation.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
              <Box
                id="contact"
                pt={4}
                width="50%"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  width: { xs: "100%", lg: "50%" },
                }}
              >
                <Typography sx={{ textDecoration: "underline" }}>
                  Contact Us
                </Typography>
                <TextField placeholder="Message..." sx={{ width: "100%" }} />
                <Button variant="contained" sx={{ width: "50%" }}>
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
