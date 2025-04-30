import {
  Divider,
  Button,
  Modal,
  Box,
  TextField,
  Grid,
} from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
import { Field, Form, Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../State/Order/Action";
import { useNavigate } from "react-router-dom";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: "",
};

const Cart = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  // Add fallback to ensure cart is always an object
  const cart = useSelector((state) => state.cart) || {};
  const auth = useSelector((state) => state.auth) || {};
  const dispatch = useDispatch();

  const cartItems = cart.cartItems || [];
  const cartInfo = cart.cart || {};

  const handleProceedToPay = () => {
    navigate("/payment");
  };

  const createOrderUsingSelectedAddress = (address) => {
    const restaurantId = cartItems[0]?.food?.restaurant?.id;
    if (!restaurantId) {
      console.error("Restaurant ID not found");
      return;
    }

    const data = {
      jwt: localStorage.getItem("jwt"),
      order: {
        restaurantId,
        deliveryAddress: address,
      },
    };
    dispatch(createOrder(data));
    console.log("Selected address:", address);
  };

  const handleOpenAddressModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (value) => {
    const restaurantId = cartItems[0]?.food?.restaurant?.id;
    if (!restaurantId) {
      console.error("Restaurant ID not found");
      return;
    }

    const data = {
      jwt: localStorage.getItem("jwt"),
      order: {
        restaurantId,
        deliveryAddress: {
          fullName: auth.user?.fullName || "",
          streetAddress: value.streetAddress,
          city: value.city,
          state: value.state,
          pincode: value.pincode,
          country: "India",
        },
      },
    };
    dispatch(createOrder(data));
    console.log("form value", value);
  };

  return (
    <React.Fragment>
      <main className="p-5 space-y-5">
        {/* Cart Items Section */}
        <section className="bg-black p-5 rounded-lg shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-white justify-center font-bold">
              Delivery in 20 mins
            </h2>
          </div>

          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem item={item} key={item.id} />
            ))
          ) : (
            <p className="text-white text-center">Your cart is empty.</p>
          )}

          <Divider />

          {/* Membership / Pass section */}
          <div className="bg-white p-4 rounded-lg shadow-lg ring-1 ring-pink-400/50 hover:shadow-pink-400 transition duration-300">
            <h3 className="text-purple-700 font-bold mb-2">
              Renew <span className="bg-yellow-300 px-2 rounded">Pass</span> & Save More
            </h3>
            <p className="text-gray-600">
              You saved ₹50 so far. That’s 50 times of what you’ve paid for Pass.
            </p>
            <br />
            <Button
              variant="contained"
              size="small"
              color="secondary"
              onClick={() => alert("Pass added to cart")}
              className="!mt-5"
              sx={{
                bgcolor: "#1976d2",
                "&:hover": { bgcolor: "#115293" },
              }}
            >
              Add 1 Month @ ₹19
            </Button>
          </div>

          <Divider />

          {/* Billing Details */}
          <div className="space-y-3 pt-5 text-white-600">
            <div className="flex justify-between">
              <span>Item Total</span>
              <span>₹{cartInfo.total || 0}</span>
            </div>
            <div className="flex justify-between text-white-800">
              <span>Delivery Fee</span>
              <span>₹{cartInfo.deliveryFee || 0}</span>
            </div>
            <div className="flex justify-between text-white-800">
              <span>GST and Restaurant Charges</span>
              <span>₹{cartInfo.gstCharges || 0}</span>
            </div>
            <Divider />
            <div className="flex justify-between font-bold text-white-800">
              <span>Total Pay</span>
              <span>₹{cartInfo.total || 0}</span>
            </div>
          </div>
        </section>

        {/* Address Section */}
        {/* <section className="flex flex-col items-center space-y-6 p-5">
          <h1 className="text-2xl font-bold text-center">
            Choose Delivery Address
          </h1>

          <div className="flex flex-col space-y-4 w-full max-w-2xl">
            
            <div
              onClick={handleOpenAddressModal}
              className="bg-black rounded-lg shadow-md p-4 flex justify-between items-center cursor-pointer hover:shadow-lg transition"
            >
              <div className="flex items-center space-x-4">
                <AddLocation fontSize="large" className="text-blue-500" />
                <div>
                  <h2 className="text-lg font-semibold text-white-800">
                    Add New Address
                  </h2>
                  <p className="text-sm text-white-500">
                    Add a new delivery address
                  </p>
                </div>
              </div>
              <Button
                variant="outlined"
                style={{ borderColor: "#1976d2", color: "#1976d2" }}
              >
                Add
              </Button>
            </div>
          </div>
        </section> */}

        {/* Modal for Adding New Address */}
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="streetAddress"
                      label="Street Address"
                      fullWidth
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="state"
                      label="State"
                      fullWidth
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="city"
                      label="City"
                      fullWidth
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="pincode"
                      label="Pincode"
                      fullWidth
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      sx={{
                        bgcolor: "#1976d2",
                        "&:hover": { bgcolor: "#115293" },
                      }}
                    >
                      Deliver Here
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Box>
        </Modal>

        <div className="flex justify-end">
          <Button
            variant="contained"
            onClick={handleProceedToPay}
            sx={{ mt: 2 }}
            size="small"
            color="primary"
            className="mt-3"
          >
            Proceed to Pay
          </Button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Cart;
