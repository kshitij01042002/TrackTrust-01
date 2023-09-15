import React, {useEffect, useState, useMemo} from 'react';
import Web3 from "web3";
import Manuboard from './manuDashboard';
import { MaterialReactTable } from 'material-react-table';

function Main({state}) { 
  const [detail, setDetail] = useState([]);
  var data;
  var status = [
    "Manufacture_In",
    "Ordered",
    "Manufacture_Out",
    "Warehouse_In",
    "Warehouse_Out",
    "Retailer_In",
    "Retailer_Out",
    "Delivered"];
  const columns = useMemo(
      () => [
        {
          accessorKey: 'product', //access nested data with dot notation
          header: 'Product Name',
          size: 150,
        },
        {
          accessorKey: 'desc',
          header: 'Product description',
          size: 150,
        },
        {
          accessorKey: 'price', //normal accessorKey
          header: 'Price',
          size: 200,
        },
        {
          accessorKey: 'status',
          header: 'Status',
          size: 150,
        },
        {
          accessorKey: 'link',
          header: 'Verify',
          size: 150,
        },
      ],
      [],
    );
  useEffect(() => {
    const { contract } = state;
    const getDetail = async () => {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const nameText = await contract.methods
        .getAllProducts()
        .call();
      console.log(nameText);
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
      link: <a class="text-indigo-400 inline-flex items-center" href={`verify/${item.id}`} >Verify
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a>
    }));

    return(
    <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-2/3 mx-auto">
      <div class="flex flex-wrap w-full bg-gray-800 py-32 px-10 relative">
        
      <div class="flex flex-col text-center w-full mb-2">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Your Products</h1>
          </div>
          <Manuboard state={state}></Manuboard>
          <div class="mt-2">
      <div class="flex flex-col text-center w-full mb-2">
      <div class="flex flex-col text-center w-full mb-2">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Your Inventory</h1>
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
)};

export default Main;
