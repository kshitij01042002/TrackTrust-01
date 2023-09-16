import React, { useEffect, useState, useMemo } from "react";
import Web3 from "web3";
import Manuboard from "./manuDashboard";
import { MaterialReactTable } from "material-react-table";
import { Redirect,Route, Navigate } from 'react-router-dom';
import Customer from "./customer";

function Main({ state }) {
  const [detail, setDetail] = useState([]);
  const [user, setUser] = useState("");
  var data;
  var status = [
    "Manufacture_In",
    "Ordered",
    "Manufacture_Out",
    "Warehouse_In",
    "Warehouse_Out",
    "Retailer_In",
    "Retailer_Out",
    "Delivered",
  ];
  const columns = useMemo(
    () => [
      {
        accessorKey: "product", //access nested data with dot notation
        header: "Product Name",
        size: 150,
      },
      {
        accessorKey: "desc",
        header: "Product description",
        size: 150,
      },
      {
        accessorKey: "price", //normal accessorKey
        header: "Price",
        size: 200,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 150,
      },
      {
        accessorKey: "link",
        header: "Track",
        size: 150,
      },
    ],
    []
  );
  useEffect(() => {
    const { contract } = state;
    const getDetail = async () => {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const nameText = await contract.methods.getAllProducts().call();
      console.log(nameText);
      const username = await contract.methods.getUserRole(accounts[0]).call();
      setUser(username);
      setDetail(nameText);
    };
    contract && getDetail();
  }, [state]);
  console.log("Main");
  data = detail.map((item, index) => ({
    product: item.name,
    desc: item.description,
    price: item.price,
    status: status[item.stage],
    link: (
      <a
        class="text-indigo-400 inline-flex items-center"
        href={`verify/${item.id}`}
      >
        Track
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    ),
  }));

   return (
    <>
      <>
        {user === "Manufacturer" ? (
          <>
            <Navigate to="/manufacturer" />
          </>
        ) : (
          <p></p>
        )}
      </>
      <>
        {user === "Customer" ? (
          <>
            <Navigate to="/customer" />
          </>
        ) : (
          <p></p>
        )}
      </>
      <>
        {user === "Admin" ? (
          <>
            <Navigate to="/admin_dash" />
          </>
        ) : (
          <p></p>
        )}
      </>
      <>
        {user === "Warehouse" ? (
          <>
            <Navigate to="/warehousein" />
          </>
        ) : (
          <p></p>
        )}
      </>
      <>
        {user === "Retailer" ? (
          <>
            <Navigate to="/retailerin" />
          </>
        ) : (
          <p></p>
        )}
      </>
    </>
  );
}

export default Main;
