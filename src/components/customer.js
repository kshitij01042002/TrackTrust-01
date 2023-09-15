import React, { useEffect, useState, useMemo } from 'react';
import Web3 from 'web3';
import { MaterialReactTable } from 'material-react-table';

function Customer({ state }) {
  const [detail, setDetail] = useState('');
  const [blobUrl, setBlobUrl] = useState('');
  const checkedValues = [];

  const getCheckedValues = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedValues.push(checkbox.value);
      }
    });
    console.log('hii');
    // Do something with the checkedValues array (e.g., display it)
    console.log(checkedValues);
  };

  useEffect(() => {
    const { contract } = state;
    const getDetail = async () => {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const nameText = await contract.methods.Manufacture_Array(accounts[0]).call();
      setDetail(nameText);
    };
    contract && getDetail();
  }, [state]);

  // Example data for MaterialReactTable
  const data = [
    {
      product: '261 Erdman Ford',
      price: 'East Daphne',
      description: 'adsadsdsadsa',
      buy: (
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={getCheckedValues}>
          BUY
        </button>
      ),
    },
    {
      product: '261 Erdman Ford',
      price: 'East Daphne',
      description: 'adsadsdsadsa',
      buy: (
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={getCheckedValues}>
          BUY
        </button>
      ),
    },
    // Add more data rows as needed
  ];

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
        accessorKey: 'description',
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
            data={data}
            cellStyle={{ background: 'black'}}
          />
        </div>
      </div>
    </section>
  );
}

export default Customer;
