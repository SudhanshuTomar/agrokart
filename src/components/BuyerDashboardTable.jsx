import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const BuyerDashboardTable = () => {
  const DeleteOrder = (props) => {
    return (
      <Button
        variant="contained"
        color="primary"
        size="small"
        sx={{ minWidth: 40 }}
      >
        <DeleteIcon />
      </Button>
    );
  };
  const EditOrder = (props) => {
    return (
      <Button
        variant="contained"
        color="primary"
        size="small"
        sx={{ minWidth: 40 }}
      >
        <EditIcon />
      </Button>
    );
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "query",
      headerName: "Crop Name",
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
    },
    {
      field: "rate",
      headerName: "Rate",
      flex: 1.25,
    },
    {
      field: "edit-order",
      headerName: "",
      flex: 0.5,
      renderCell: EditOrder,
      sortable: false,
    },
    {
      field: "delete-order",
      headerName: "",
      flex: 0.5,
      renderCell: DeleteOrder,
      sortable: false,
    },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      query: "wheat",
      quantity: "50",
      rate: "50",
      // utilities: ,
    },
    {
      id: 2,
      query: "wheat",
      quantity: "50",
      rate: "505",
    },
    {
      id: 3,
      query: "wheat",
      quantity: "55",
      rate: "520",
    },
    {
      id: 4,
      query: "wheat",
      quantity: "40",
      rate: "550",
    },
    {
      id: 5,
      query: "wheat",
      quantity: "60",
      rate: "500",
    },
  ]);

  return (
    <div style={{ height: 480, margin: "30px 0" }}>
      <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        disableColumnMenu
      />
    </div>
  );
};

export default BuyerDashboardTable;
