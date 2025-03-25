'use client'
import React,{useState,useEffect} from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import { Box, Button, CircularProgress, Divider, IconButton,FormControl,TextField,Typography } from '@mui/material'
import { Add, Delete, Remove } from '@mui/icons-material'
import Image from 'next/image'
import { grey ,red} from "@mui/material/colors";
import useCartStore from '../stores/useCartStore'
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    cartItems,
    shippingCost,
    cartTotalBalance,
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeItemFromCart,
  } = useCartStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    return subtotal + shippingCost;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkout Data:", formData);
    // Here you would send the formData to your backend or Stripe session
  };

  
  // const createOrder = async () => {
  //   try {
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         userData: {
  //           userName: formData.name,
  //           userEmail: formData.email,
  //           phoneNumber: formData.phone,
  //             // userName: 'username',  // Store username directly
  //             // userEmail: 'useremail',  // Store user email directly
  //             // phoneNumber: '111000', // Contact number for delivery

  //         },
  //         items: cartItems.map((item) => ({
  //           //itemId: item.id,
  //           name: item.title,
  //           imageurl: item.image_url,
  //           productType: 'Pizza',
  //           quantity: item.quantity,
  //         })),
  //         totalAmount: calculateTotal(),
  //         payment: { status: "pending", provider: "stripe",sessionId:'' },
  //         orderStatus: "order processed",
  //         deliveryDetails: {
  //           isPickup: false,
  //           address: {
  //             street: formData.street,
  //             city: formData.city,
  //             state: formData.state,
  //             postalCode: formData.postalCode,
  //             country: formData.country,
  //             // street: 'street',
  //             // city: 'city',
  //             // state: 'state',
  //             // postalCode: '00',
  //             // country:  "UY",
  //           },
  //           // deliveryInstructions: formData.notes ,
  //           deliveryInstructions: '',
  //           estimatedDeliveryTime:'40min',
  //         },
  //       }),
  //     });
  
  //     if (!response.ok) throw new Error("Failed to create order");
  
  //     const orderData = await response.json();
  //     return orderData.orderObj._id; // Return order ID
  //   } catch (error) {
  //     console.error("❌ Error creating order:", error);
  //     alert("Failed to create order. Please try again.");
  //     throw error;
  //   }
  // };
  
  // const createStripeSession = async (totalAmount, orderId) => {
  //   try {
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/payments/create-session`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         items: cartItems.map((item) => ({
  //           name: item.title,
  //           image: item.image_url,
  //           price: item.price * 100,
  //           quantity: item.quantity,
  //         })),
  //         totalAmount,
  //         orderId, // Pass order ID
  //       }),
  //     });
  
  //     if (!response.ok) throw new Error("Failed to create Stripe session");
  
  //     const stripeData = await response.json();
  //     return stripeData;
  //   } catch (error) {
  //     console.error("❌ Error creating Stripe session:", error);
  //     alert("Payment initiation failed. Please try again.");
  //     throw error;
  //   }
  // };
  
  // const updateOrderWithSession = async (orderId, sessionId) => {
  //   console.log("🔹 Sending PATCH request to update order:", {
  //     orderId,
  //     sessionId,
  //   });

  //   try {
  //     if(sessionId != null){
  //       await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/update/${orderId}`, {
  //         method: "PATCH",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ orderStatus: "processing", "payment.sessionId": sessionId}),
  //       });
  //       console.log("✅ Order updated with sessionId:", sessionId);  
  //     }else{
  //         console.log('no sessionId provided:',sessionId);
  //     }
  //   } catch (error) {
  //     console.error("❌ Error updating order with sessionId:", error);
  //     alert("Order update failed.");
  //     throw error;
  //   }
  // };

  // const handlePayment = async () => {
  //   try {
  //     console.log("🔹 handlePayment is executing..."); 
  //     setLoading(true);

  //   // 1️⃣ Step 1: Create Order
  //   const orderId = await createOrder();

  //   // 2️⃣ Step 2: Create Stripe Session
  //   const sessionStripe = await createStripeSession(cartTotalBalance(), orderId);

  //   if(sessionStripe.id !== null && sessionStripe.id !== undefined){
  //     // 3️⃣ Step 3: Update Order with Session ID
  //     const updateOrder = await updateOrderWithSession(orderId, sessionStripe.id);
  //      console.log('updated order:',updateOrder);
  //   }else{
  //     console.log('failed sessionId:',sessionStripe.id);
  //   }

  //   // const { url } = await sessionStripe.json();
  //   window.location.href = sessionStripe.url;

  //   } catch (error) {
  //     console.error("Error during payment:", error);
  //     alert("Failed to initiate payment. Please try again.");
  //   } finally{
  //     setLoading(false);
  //   }
  // };

  const cancelCheckout = () => {
    router.push("/");
  };

  return (
   <Box sx={{display:'flex',flexDirection:'column',gap:2,mt:4,minHeight:'100vh',width:'100%'}}>
    <Typography variant='h3' pt={4} pl={4}>Checkout</Typography>
    <Divider sx={{borderColor:'primary.main',borderWidth:'1px',mb:4}}/>
    <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            minWidth: {md:'50%',lg:"40%"},
            margin: "0 auto",
            padding: 4,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            borderRadius: 2,
            backgroundColor: "background.dark",
            color: "text.main",
            p: 4,
            boxShadow: 2,
          }}
        >
          <Typography variant="h4" mb={2}>
            Delivery Details
          </Typography>

          {/* Full Name */}
          <FormControl fullWidth>
            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormControl>

          {/* Email */}
          <FormControl fullWidth>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormControl>

          {/* Phone */}
          <FormControl fullWidth>
            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </FormControl>

          {/* Street Address */}
          <FormControl fullWidth>
            <TextField
              label="Street Address"
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
            />
          </FormControl>

          {/* City & State */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <FormControl fullWidth>
              <TextField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl fullWidth>
              <TextField
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </FormControl>
          </Box>

          {/* Postal Code & Country */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <FormControl fullWidth>
              <TextField
                label="Postal Code"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </FormControl>

            {/* <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <MenuItem value="US">United States</MenuItem>
                <MenuItem value="UY">Uruguay</MenuItem>
                <MenuItem value="AR">Argentina</MenuItem>
                <MenuItem value="BR">Brazil</MenuItem>
                <MenuItem value="ES">Spain</MenuItem>
              </Select>
            </FormControl> */}
          </Box>

          {/* Delivery Notes */}
          <FormControl fullWidth>
            <TextField
              label="Delivery Notes (Optional)"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              multiline
              rows={3}
            />
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: { sm: "100%",md:'50',lg: "60%" },
            height: "auto",
            flexDirection: { xs: "row", sm: "column" },
            // border: {xs:0,lg:1,xl:1},
            borderLeft: 1,
            borderColor: grey[800],
            gap: 2,
            flexWrap: "wrap",
            p: 4,
          }}
        >
   {/* Parent Container of cart items */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              width:'100%'
            }}
          >
          <Typography variant="h4" >My order</Typography>
          <AnimatePresence >
           {
            cartItems.map(item=>(
              <motion.div  
                key={item.id}
                // initial={{opacity:0,y:-200,x:0}}
                initial={{opacity:0}}
                animate={{opacity:1,y:0,x:0}}
                exit={{opacity:0,x:-200,transition:{duration:0.2,ease:'easeInOut'}}}
                // exit={{opacity:0,transition:{duration:0.3,ease:'easeIn'}}}

                transition={{duration:0.4,ease:'easeInOut',delay:0.2}}
                > 
                <Box                
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      md: "column",
                      lg: "row",
                      backgroundBlendMode: "soft-light",
                    },
                    justifyContent: { md: "start",sm:'space-between',md:'space-between', lg: "space-between" },
                    borderRadius: "8px",
                    alignItems: "space-between",
                    gap: 6,
                    color: "primary.light",
                    border: 1,
                    borderColor: "gray",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    width: "100%",
                    height: "auto",
                    p: 1,
                  }}
                >
                  {/* COL 1 - IMAGE + TITLE */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap:{xs:'wrap',lg:'nowrap'},
                      flexDirection:'row',
                      alignItems: "center", 
                      gap: { xs: 3, lg: 1 },
                      p:2
                    }}
                  >
                    {/* IMAGE */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "auto",
                        height: "auto",
                        backgroundColor: "primary.dark",
                      }}
                    >
                      <Image
                        src={item.image}
                        // src='/content1.jpg'
                        alt="prod image"
                        width={100}
                        height={100}
                        objectFit="contain"
                        style={{
                        maxWidth: "100%",
                        height: "auto",
                        }}
                      />
                    </Box>
                    {/* TITLE */}
                     <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        ml:4
                      }}
                    >
                      <Typography variant="h4">
                         {item.title}    
                      </Typography>
                    </Box>
                  </Box>
               {/* PRICE + DELETE */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "row", sm: "row",md:'row' },
                      justifyContent: { xs: "space-between", lg: "end" },
                      alignItems: { xs: "center", sm: "center", lg: "center" },
                      flexFlow:'wrap',
                      gap: { xs: 6, sm: 4, lg: 4 },
                      pl: { xs: 2 },
                      pr: { xs: 2 },
                      flexWrap:{sm:'nowrap'}
                    }}
                  >
                           <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  backgroundColor: "#000",
                                  border:1,
                                  boxShadow:1,
                                  borderColor: grey[900],
                                  color: "primary.light",
                                  borderRadius: "8px",              
                                  minWidth: "auto",
                                }}
                              >
                                <IconButton
                                  onClick={() => decreaseQuantity(item.id)}
                                  sx={{ color: "#fff" }}
                                >
                                  <Remove />
                                </IconButton>
                  
                                <Typography variant="h6" sx={{ ml: 2, mr: 2 }}>
                                  {getItemQuantity(item.id)}
                                </Typography>
                  
                                <IconButton
                                  onClick={() => increaseQuantity(item.id)}
                                  sx={{ color: "#fff" }}
                                >
                                  <Add />
                                </IconButton>
                              </Box>
                    <Typography variant="h5" fontWeight={600}>
                      ${item.price}
                   
                    </Typography>

                    <Box>
                      <IconButton
                        onClick={() => removeItemFromCart(item.id)}
                        size="medium"
             
                      >
                        {/* <Typography variant='h5' sx={{transition:'all 200ms ease-in-out',opacity:0.6,":hover":{opacity:1}}}>Remove</Typography>
                      */}
                 <Delete color="text.muted" fontSize='small' sx={{opacity:0.6,":hover":{opacity:1,transition:'opacity',transitionDuration:'0.4',transitionTimingFunction:'ease-in-out'}}}/>
           
                      </IconButton>
                    </Box>
                 </Box>
               </Box>

              </motion.div>
            ))
            }
          </AnimatePresence>
        {/* SUBTOTAL AND TOTAL */}
             <Box
               sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                mt: "auto",
                gap: 2,
                pt: { xs: 8 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h5">Subtotal</Typography>
                <Typography variant="h5">
                  ${calculateSubtotal().toFixed(2)}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6" color="primary.muted">
                  Shipping
                </Typography>
                <Typography variant="h6" color="primary.muted">
                  ${shippingCost}
                </Typography>
              </Box>
              <Divider sx={{ width: "100%", backgroundColor: "text.light" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  mt: 6,
                  mb: 4,
                }}
              >
                <Typography variant="h4" fontWeight="bold">
                  Total
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  ${calculateTotal().toFixed(2)}
                </Typography>
              </Box>
              {/* Submit Button */}
              <Button
                // onClick={handlePayment}
                fullWidth={true}
                variant="contained"
                size="large"
                sx={{
                  width:{lg:'50%'},
                  border: 1,
                  borderColor: "primary.main",
                  opacity:0.8,
                  p: 2,
                  borderRadius: "8px",
                  color: "primary.dark",
                  backgroundColor: "background.light",
                  // fontSize: "1.2rem",
                  "&:hover": {
                    opacity:1,
                    backgroundColor: "black",
                    color: "primary.light",
                  },
                }}
              >
          { loading ? <CircularProgress color="primary.dark"/> : " Proceed to Payment"}            
              </Button>
             </Box>
          </Box>
        </Box>
      </Box>
   </Box>
  )
}
