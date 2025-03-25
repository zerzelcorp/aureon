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
              p: 4,
              display: "flex",
              flexDirection: "column",
              gap: 4,
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
                  justifyContent: { sm: "center", lg: "center" },
                  alignItems: "center",
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "50%" },
                  maxWidth: 500,
                  aspectRatio: "1 / 1",
                  position: "relative",
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
                  mt: { xs: 1 },
                  // alignItems: "center",
                  // pl:{md:8},
                  // pr:{md:8},
                  width: { sm: "100%", md: "100%", lg: "50%" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: 2, sm: 2, lg: 0 },
                    flexDirection: { xs: "column", sm: "column", lg: "row" },
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography variant="h4">{product.title}</Typography>
                  <Typography variant="h5">${product.price}</Typography>
                </Box>
                <Typography variant="body1" mt={6}>
                  {product.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      sm: "column",
                      md: "row",
                      lg: "row",
                    },
                    width: "100%",
                    gap: 4,
                    mt: 6,
                    // mt: {sm:6,lg:'auto'},
                    // mb:{sm:6,lg:0},
                    mb: 6,
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
                        p: 2,
                        width: { sm: "50%" },
                        fontFamily: "Geist",
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
                      borderRadius: "8px",
                      border: 1,
                      borderColor: grey[900],
                      width: "20%",
                      minWidth: "200px",
                    }}
                  >
                    <IconButton
                      onClick={() => decreaseQuantity(product.id)}
                      sx={{ color: "#fff" }}
                    >
                      <Remove />
                    </IconButton>
                    <Typography variant="h6" sx={{ ml: 2, mr: 2 }}>
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
                      Composition,Care & Origin
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
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
                      Shipping,Exchanges and Returns
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
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
