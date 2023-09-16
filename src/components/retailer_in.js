import React, {useEffect, useState, useMemo} from 'react';
import { MaterialReactTable } from 'material-react-table';


function RetailerIn({state}) {
    //should be memoized or stable
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
            accessorKey: 'buy',
            header: 'Select',
            size: 150,
          },
        ],
        [],
      );
    const [detail, setDetail] = useState([]);
  const checkedValues = [];
  var data;
  
  const getCheckedValues = async() => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedValues.push(checkbox.value);
      }
    });

    const { contract, web3 } = state;
        console.log(web3)
        const accounts = await web3.eth.getAccounts();
        await contract.methods
          .updateStagetoRetailerIn(checkedValues)
          .send({ from: accounts[0] });
        console.log("Hii");
  }
  useEffect(() => {
    const { contract } = state;
    const getDetail = async () => {
      const nameText = await contract.methods
      .getAllProducts()
      .call();
      setDetail(nameText);
    };
    contract && getDetail();
  }, [state]);

  data = detail
  .filter((item) => item.stage === "4").map((item, index) => ({
    product: item.name,
    desc: item.description,
    price: item.price,
    buy: <input type="checkbox" name="checkbox1" value={item.id}></input>
  }));


    return(
      <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Retailer Accept Product</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Select the Products that was received</p>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <MaterialReactTable
            columns={columns}
            data={data}
          />
        </div>
        <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-6 " onClick={getCheckedValues}>RECEIVED</button>
      </div>
    </section>
)};

export default RetailerIn;
