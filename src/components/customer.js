import React, { useEffect, useState, useMemo } from 'react';
import Web3 from 'web3';
import { MaterialReactTable } from 'material-react-table';

function Customer({ state }) {

const [detail, setDetail] = useState([]);
var data1;
const buyProduct = async(ids) => {
  const { contract, web3 } = state; 
  const accounts = await web3.eth.getAccounts();
    console.log(ids);
    const nameText = await contract.methods.Product_Array(ids).call();
    console.log(nameText[3]);
    await contract.methods
        .buy(ids)
        .send({ from: accounts[0], value: Number(nameText[3]), gas: 480000 });
    return ids;
    
  }
  // Define columns for MaterialReactTable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'product',
        header: 'Product',
        size: 150,
      },
      {
        accessorKey: 'price',
        header: 'Price',
        size: 150,
      },
      {
        accessorKey: 'desc',
        header: 'Description',
        size: 150,
      },
      {
        accessorKey: 'buy',
        header: 'Action',
        size: 200,
      },
    ],
    []
  );
  useEffect(() => {
    const { contract } = state;
    const getDetail = async () => {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const nameText = await contract.methods
      .getAllProducts()
      .call();
      setDetail(nameText);
      console.log(nameText)
    };
    contract && getDetail();
  }, [state]);
  
  data1 = detail.filter((item) => item.stage === "0").map((item, index) => ({
    product: item.name,
    desc: item.description ,
    price: item.price,
    buy: <button name="butt"  value={item.id} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={() => buyProduct(item.id)}>
          BUY
        </button>
    
  }));

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Customer Table</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Place the orders from this page</p>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <MaterialReactTable
            columns={columns}
            data={data1}
            cellStyle={{ background: 'black'}}
          />
        </div>
      </div>
    </section>
  );
}

export default Customer;
