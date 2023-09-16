import React, { useEffect, useState, useMemo } from "react";
import Web3 from "web3";
import Manuboard from "./manuDashboard";
import { MaterialReactTable } from "material-react-table";
import LineChart from "./BarChart";

function Manufacturer({ state }) {
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

  const UserData = [
    {
      id: 1,
      year: "Manufacturer",
      userGain: 80000,
    },
    {
      id: 2,
      year: "Warehouse",
      userGain: 45677,
    },
    {
      id: 3,
      year: "Retailer",
      userGain: 78888,
    },
    {
      id: 4,
      year: "Delivered",
      userGain: 90000,
    },
    {
      id: 5,
      year: "In Transit",
      userGain: 4300,
    },
  ];

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Products",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

   return (
            <section class="text-gray-400 bg-gray-900 body-font">
              <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="lg:w-2/3 mx-auto">
                  <div class="flex flex-wrap w-full bg-gray-800 py-12 px-10 relative">
                    <div class="flex flex-col text-center w-full mb-2">
                    <div class="flex flex-wrap -m-4 text-center">
             <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="3"></circle>
            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
          </svg>
          </svg>
          <h2 class="title-font font-medium text-3xl text-white">$2.7K</h2>
          <p class="leading-relaxed">This months sale</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-white">1.3K</h2>
          <p class="leading-relaxed">Total Customers</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-white">74</h2>
          <p class="leading-relaxed">Total Orders</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-white">46</h2>
          <p class="leading-relaxed">Predicted Sale for tomorrow</p>
        </div>
      </div>
             </div>
                      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                        Your Products
                      </h1>
                    </div>
                    <Manuboard state={state}></Manuboard>
                        <div class="flex flex-col text-center w-full mb-2">
                          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                            Product Stage Distribution
                          </h1>
                        </div>
                    <LineChart chartData={userData} />
                    <div class="mt-2">
                      <div class="flex flex-col text-center w-full mb-2">
                        <div class="flex flex-col text-center w-full mb-2">
                          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                            Your Inventory
                          </h1>
                        </div>
                        <MaterialReactTable
                          class="mt-9"
                          columns={columns}
                          data={data}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  );
}

export default Manufacturer;
