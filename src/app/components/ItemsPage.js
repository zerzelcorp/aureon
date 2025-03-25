"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import useCartStore from "../stores/useCartStore";
import {motion} from 'framer-motion'

export default function ItemsPage({ title }) {
  const [filterval, setFilter] = useState("");
  const [filterbymaterial, setFilterByMaterial] = useState("");
  const [filterbymodel, setFilterByModel] = useState("");
  const {data,sofas,chairs,products,sideTables,coffeeTables,diningTables,sideBoards,diningChairs,beds,nightstands} = useCartStore();
  const [items, setItems] = useState(sideTables);

  // const items = useItemsByTitle(title);
  const handleFilterByMaterial = (event) => {
    setFilterByMaterial(event.target.value);
  };
  const handleFilterByModel = (event) => {
    setFilterByModel(event.target.value);
  };

  const handleFilterByChange = (event) => {
    setFilter(event.target.value);
  };

useEffect(() => {
  console.log(title);
    if(title == 'Sofas'){
      setItems(sofas);
    }else if(title == 'Chairs'){
      setItems(chairs);
    }else if(title == 'Side Tables'){
      setItems(sideTables);
    }else if(title == 'Coffe Tables'){
      setItems(coffeeTables);
    }else if(title == 'Chairs'){
      setItems(data);
    }else if(title == 'Dining Chairs'){
      setItems(diningChairs);
    }
    else if(title == 'Dining Tables'){
      setItems(diningTables);
    }
    else if(title == 'Sideboards'){
      setItems(sideBoards);
    } else if(title == 'Beds'){
      setItems(beds);
    }else if(title == 'Nightstands'){
      setItems(nightstands);
    }else if(title == 'New Arrivals'){
      setItems(products.newArrivals);
    }else if(title == 'Winter 2025'){
      setItems(data);
    }else if(title == 'Fall 2025'){
      setItems(data);
    }
 
    // setItems(data);
    // console.log("items itemPage:",items);
}, [title,items])


const cascadeVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.3,
    },
  }),
};
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", p:{xs:2},flexDirection: "column" }}>
      <Box sx={{ minHeight: "100vh" }}>
      <Box display="flex" p={4} mt={2}>
      {title.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={cascadeVariants}
        >
          <Typography variant="h3" component="span">
            {char}
          </Typography>
        </motion.span>
      ))}
    </Box>
 {/* FILTERS */}
        {/* <Box
          sx={{
            width: "65%",
            p: 4,
            gap: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Box width="100%">
            <Typography color="text.muted">Filter By Material:</Typography>
            <FormControl fullWidth>
              <InputLabel id="filterbymaterial">Filter 1</InputLabel>
              <Select
                labelId="filterbymaterial"
                id="filterbymaterial"
                value={filterbymaterial}
                label="Filter By"
                onChange={handleFilterByMaterial}
              >
                <MenuItem value="other">Leather</MenuItem>
                <MenuItem value="cotton">Filter 2</MenuItem>
                <MenuItem value="leather">Filter 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box width="100%">
          <Typography color="text.muted">Filter By Model:</Typography>
            <FormControl fullWidth>
              <InputLabel id="filterbymodel">Filter2:</InputLabel>
              <Select
                labelId="filterbymodel"
                id="filterbymodel"
                value={filterbymodel}
                label="Filter By"
                onChange={handleFilterByModel}
              >
                <MenuItem value="other">Filter 1</MenuItem>
                <MenuItem value="cotton">Filter 2</MenuItem>
                <MenuItem value="leather">Filter 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box width="100%">
          <Typography color="text.muted">Filter By Availability:</Typography>
            <FormControl fullWidth>
              <InputLabel id="filterby" color="white">Filter 3:</InputLabel>
              <Select
                labelId="filterby"
                id="filterby-select"
                value={filterval}
                label="Filter By"
                onChange={handleFilterByChange}
                fullWidth
                // MenuProps={{
                //   slotProps: {
                //     paper: {
                //       sx: {
                //         backgroundColor: "primary.main",
                //         color: "text.primary",
                //       },
                //     },
                //   },
                // }}
              >
                <MenuItem value="other">Filter 1</MenuItem>
                <MenuItem value="cotton">Filter 2</MenuItem>
                <MenuItem value="leather">Filter 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box> */}
  {/* ITEMS GRID       */}
        <Grid2 container spacing={2}>
          {items.map((item) => (
            <Grid2 key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 4 }} p={2}>
              <ProductItem item={item} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
}
