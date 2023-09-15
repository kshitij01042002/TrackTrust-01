import React, {useEffect, useState, useMemo} from 'react';
import Web3 from "web3";
import { MaterialReactTable } from 'material-react-table';


function Sell({state}) { 
//nested data is ok, see accessorKeys in ColumnDef below
const data = [
    {
      name: {
        firstName: 'John',
        lastName: 'Doe',
      },
      address: '261 Erdman Ford',
      city: 'East Daphne',
      state: 'Kentucky',
      buy: <input type="checkbox" name="checkbox1"></input>
    },
    {
      name: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
      address: '769 Dominic Grove',
      city: 'Columbus',
      state: 'Ohio',
      buy: <input type="checkbox" name="checkbox1"></input>
    },
    {
      name: {
        firstName: 'Joe',
        lastName: 'Doe',
      },
      address: '566 Brakus Inlet',
      city: 'South Linda',
      state: 'West Virginia',
      buy: <input type="checkbox" name="checkbox1"></input>
    },
    {
      name: {
        firstName: 'Kevin',
        lastName: 'Vandy',
      },
      address: '722 Emie Stream',
      city: 'Lincoln',
      state: 'Nebraska',
      buy: <input type="checkbox" name="checkbox1"></input>
    },
    {
      name: {
        firstName: 'Joshua',
        lastName: 'Rolluffs',
      },
      address: '32188 Larkin Turnpike',
      city: 'Charleston',
      state: 'South Carolina',
      buy: <input type="checkbox" name="checkbox1"></input>
    },
  ];

    //should be memoized or stable
    const columns = useMemo(
        () => [
          {
            accessorKey: 'product', //access nested data with dot notation
            header: 'First Name',
            size: 150,
          },
          {
            accessorKey: 'desc',
            header: 'Last Name',
            size: 150,
          },
          {
            accessorKey: 'price', //normal accessorKey
            header: 'Address',
            size: 200,
          },
          {
            accessorKey: 'buy',
            header: 'Buy',
            size: 150,
          },
        ],
        [],
      );
    const [detail, setDetail] = useState([]);
  const [blobUrl, setBlobUrl] = useState("");
  const checkedValues = [];
  var data1;
  
  const getCheckedValues = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedValues.push(checkbox.value);
      }
    });

    console.log(checkedValues)
    
  }
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

  data1 = detail.map((item, index) => ({
    product: item.name,
    desc: item.description,
    price: item.price,
    buy: <input type="checkbox" name="checkbox1" value={item.id}></input>
  }));


    return(
      <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">SELL Table</h1>
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

      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={getCheckedValues}>
          BUY
        </button>
    </section>
)};

export default Sell;
