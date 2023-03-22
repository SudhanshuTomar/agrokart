import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BuyerDashboardTable from "../components/BuyerDashboardTable";
import Modal from "@mui/material/Modal";
import { InputAdornment, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const BuyerDashboard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="buyer-dashboard">
      <h1>Buyer Dashboard</h1>
      <div className="right">
        <Button onClick={handleOpen} variant="contained">
          New Order
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="form-element">
            <TextField required fullWidth name="query" label="Crop Name" />
          </div>
          <div className="form-element">
            <TextField
              required
              fullWidth
              name="quantity"
              label="Quantity"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">kg</InputAdornment>
                ),
              }}
              type={Number}
            />
          </div>
          <div className="form-element">
            <TextField
              required
              fullWidth
              name="rate"
              label="Rate"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">₹</InputAdornment>
                ),
              }}
            />
          </div>
          <div className="right">
            <Button>Add</Button>
          </div>
        </Box>
      </Modal>
      <BuyerDashboardTable />
    </div>
  );
};

export default BuyerDashboard;
