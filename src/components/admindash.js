import React, {useEffect, useState, useMemo} from 'react';
import { MaterialReactTable } from 'material-react-table';


function Admindash({state}) {
    //should be memoized or stable
    const columns = useMemo(
        () => [
          {
            accessorKey: 'name', //access nested data with dot notation
            header: 'Name of Manufacturer',
            size: 150,
          },
          {
            accessorKey: 'location',
            header: 'Location of Manufacturer',
            size: 150,
          },
          {
            accessorKey: 'addr', //normal accessorKey
            header: 'Manufacture_address',
            size: 200,
          },
          
        ],
        [],
      );
      const columns1 = useMemo(
        () => [
          {
            accessorKey: 'name1', //access nested data with dot notation
            header: 'Name of Warehouse',
            size: 150,
          },
          {
            accessorKey: 'location1',
            header: 'Location of Warehouse',
            size: 150,
          },
          {
            accessorKey: 'addr1', //normal accessorKey
            header: 'Warehouse_address',
            size: 200,
          },
          
        ],
        [],
      );
      const columns2 = useMemo(
        () => [
          {
            accessorKey: 'name2', //access nested data with dot notation
            header: 'Name of Retailer',
            size: 150,
          },
          {
            accessorKey: 'location2',
            header: 'Location of Retailer',
            size: 150,
          },
          {
            accessorKey: 'addr2', //normal accessorKey
            header: 'Retailer_address',
            size: 200,
          },
          
        ],
        [],
      );
    const [detail, setDetail] = useState([]);
    const [detail1, setwarehouse] = useState([]);
    const [detail2, setretailer] = useState([]);

  var data;
  var data1;
  var data2;
  
  
  useEffect(() => {
    const { contract } = state;
    const getDetail = async () => {
      const nameText = await contract.methods
      .getAllManufacturers()
      .call();
      setDetail(nameText);
    };
    contract && getDetail();
  }, [state]);

  useEffect(() => {
    const { contract } = state;
    const getwarehouse = async () => {
      const nameText = await contract.methods
      .getAllWarehouses()
      .call();
      setwarehouse(nameText);
    };
    contract && getwarehouse();
  }, [state]);

  useEffect(() => {
    const { contract } = state;
    const getretailer = async () => {
      const nameText = await contract.methods
      .getAllRetailers()
      .call();
      setretailer(nameText);
      console.log(nameText);
    };
    contract && getretailer();
  }, [state]);


  data = detail.map((item, index) => ({
    name: item.name,
    location: item.location,
    addr: item.manufacture_address,
  }));
  data1= detail1.map((item, index) => ({
    name1: item.name,
    location1: item.location,
    addr1: item.warehouse_address,
  }));
  data2 = detail2.map((item, index) => ({
    name2: item.name,
    location2: item.location,
    addr2: item.retailer_address,
  }));


    return(
        <>
      <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Manufacturer Table</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Select the Products that was received</p>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <MaterialReactTable
            columns={columns}
            data={data}
          />

        </div>
      </div>
    </section>
    <section className="text-gray-400 bg-gray-900 body-font">
     <div className="container px-5 py-7 mx-auto">
       <div className="flex flex-col text-center w-full mb-20">
         <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Warehouse Table</h1>
         <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Select the Products that was received</p>
       </div>
       <div className="lg:w-2/3 w-full mx-auto overflow-auto">
         <MaterialReactTable
           columns={columns1}
           data={data1}
         />

       </div>
     </div>
   </section>
   <section className="text-gray-400 bg-gray-900 body-font">
     <div className="container px-5 py-5 mx-auto">
       <div className="flex flex-col text-center w-full mb-20">
         <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Retailer Table</h1>
         <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Select the Products that was received</p>
       </div>
       <div className="lg:w-2/3 w-full mx-auto overflow-auto">
         <MaterialReactTable
           columns={columns2}
           data={data2}
         />

       </div>
     </div>
   </section>
   </>
)};

export default Admindash;
