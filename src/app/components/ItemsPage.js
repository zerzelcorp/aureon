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
import { Grid } from "swiper/modules";

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
    console.log("items itemPage:",items);
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
        <Box
          sx={{
            width: "100%",
            p: { xs: 2, sm: 3, md: 4 },
            gap: { xs: 2, sm: 3 },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "stretch", sm: "center" },
            backgroundColor: "rgba(0,0,0,0.02)",
            borderRadius: 2,
            border: "1px solid rgba(128,128,128,0.1)",
            mb: 4,
            backdropFilter: "blur(10px)",
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "30%" } }}>
            <Typography 
              color="text.primary" 
              variant="body2" 
              fontWeight={500}
              sx={{ mb: 1 }}
            >
              Material
            </Typography>
            <FormControl fullWidth size="small">
              <InputLabel id="filterbymaterial">Select Material</InputLabel>
              <Select
                labelId="filterbymaterial"
                id="filterbymaterial"
                value={filterbymaterial}
                label="Select Material"
                onChange={handleFilterByMaterial}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(128,128,128,0.3)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(128,128,128,0.5)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                }}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="leather">Italian Leather</MenuItem>
                <MenuItem value="fabric">Premium Fabric</MenuItem>
                <MenuItem value="wood">Solid Wood</MenuItem>
                <MenuItem value="metal">Brushed Steel</MenuItem>
              </Select>
            </FormControl>
          </Box>
          
          <Box sx={{ width: { xs: "100%", sm: "30%" } }}>
            <Typography 
              color="text.primary" 
              variant="body2" 
              fontWeight={500}
              sx={{ mb: 1 }}
            >
              Style
            </Typography>
            <FormControl fullWidth size="small">
              <InputLabel id="filterbymodel">Select Style</InputLabel>
              <Select
                labelId="filterbymodel"
                id="filterbymodel"
                value={filterbymodel}
                label="Select Style"
                onChange={handleFilterByModel}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(128,128,128,0.3)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(128,128,128,0.5)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                }}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="modern">Modern</MenuItem>
                <MenuItem value="contemporary">Contemporary</MenuItem>
                <MenuItem value="minimalist">Minimalist</MenuItem>
                <MenuItem value="luxury">Luxury</MenuItem>
              </Select>
            </FormControl>
          </Box>
          
          <Box sx={{ width: { xs: "100%", sm: "30%" } }}>
            <Typography 
              color="text.primary" 
              variant="body2" 
              fontWeight={500}
              sx={{ mb: 1 }}
            >
              Availability
            </Typography>
            <FormControl fullWidth size="small">
              <InputLabel id="filterby">Select Availability</InputLabel>
              <Select
                labelId="filterby"
                id="filterby-select"
                value={filterval}
                label="Select Availability"
                onChange={handleFilterByChange}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(128,128,128,0.3)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(128,128,128,0.5)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                }}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="in-stock">In Stock</MenuItem>
                <MenuItem value="limited">Limited Edition</MenuItem>
                <MenuItem value="made-to-order">Made to Order</MenuItem>
                <MenuItem value="pre-order">Pre-Order</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
  {/* ITEMS GRID       */}
        <Grid2 container spacing={2} sx={{ alignItems: "stretch" }}>
          {items.map((item) => (
            <Grid2 key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 4 }} p={2} sx={{ display: "flex" }}>
              <ProductItem item={item} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
}
