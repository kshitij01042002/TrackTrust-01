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
            accessorKey: 'name.firstName', //access nested data with dot notation
            header: 'First Name',
            size: 150,
          },
          {
            accessorKey: 'name.lastName',
            header: 'Last Name',
            size: 150,
          },
          {
            accessorKey: 'address', //normal accessorKey
            header: 'Address',
            size: 200,
          },
          {
            accessorKey: 'city',
            header: 'City',
            size: 150,
          },
          {
            accessorKey: 'buy',
            header: 'Buy',
            size: 150,
          },
        ],
        [],
      );
    const [detail, setDetail] = useState("");
  const [blobUrl, setBlobUrl] = useState("");
  const checkedValues = [];
  
  const getCheckedValues = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedValues.push(checkbox.value);
      }
    });
    console.log("hii");
    // Do something with the checkedValues array (e.g., display it)
    console.log(checkedValues);
  }
  useEffect(() => {
    const { contract } = state;
    const getDetail = async () => {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const nameText = await contract.methods
        .Manufacture_Array(accounts[0])
        .call();
      setDetail(nameText);
    };
    contract && getDetail();
  }, [state]);

    return(

        <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-3/3 mx-auto">
            <div class="flex flex-wrap w-full bg-gray-800 py-32 px-10 relative mb-4">
            {/* <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">Product</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Price</th>
                  <th className="w-10 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3">{item.product}</td>
                    <td className="px-4 py-3 text-lg text-white">${item.price}</td>
                    <td className="px-4 py-3 text-lg text-white">${item.id}</td>
                    <td className="w-10 text-center">
  <input type="checkbox" name="checkbox1" value={item.id}></input>
   </td>
                  </tr>
                ))}
              </tbody>
            </table> */}

<MaterialReactTable columns={columns} data={data} />
      <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"  onClick={getCheckedValues}>Button</button>
            
            </div>

          </div>
        </div>
      </section>

)};

export default Sell;
