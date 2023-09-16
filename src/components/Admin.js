import React, { useState, useEffect } from 'react';

function Admin({state}) {
  // Define state variables to store form input values
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');

  // Function to handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    // You can perform actions with the form input values here, such as sending them to a server or performing client-side validation.
    // For this example, we'll just log the values to the console.
    console.log('User Type:', userType);
    setUserType(userType);
    console.log('Name:', name);
    setName(name);
    console.log('Location:', location);
    setLocation(location);
    console.log('Address:', address);
    setAddress(address);
    const { contract, web3 } = state;

    const accounts = await web3.eth.getAccounts();
      console.log("Hii");
      
      if(userType === "Manufacturer") {
        console.log("M");
        await contract.methods
          .addManufacture(address,name,location)
          .send({ from: accounts[0] });
      } else if(userType === "Warehouse Owner") {
        await contract.methods
          .addWarehouse(address,name,location)
          .send({ from: accounts[0] });
      } else {
        await contract.methods
          .addRetailer(address,name,location)
          .send({ from: accounts[0] });
      }
  };

  // useEffect(() => {
  //   const { contract, web3 } = state;
  //   const getDetail = async () => {
  //     const accounts = await web3.eth.getAccounts();
  //     console.log("Hii");
      
  //     if(userType === "Manufacturer") {
  //       console.log("M");
  //       await contract.methods
  //         .addManufacture(address,name,location)
  //         .send({ from: accounts[0] });
  //     } else if(userType === "Warehouse Owner") {
  //       await contract.methods
  //         .addWarehouse(address,name,location)
  //         .send({ from: accounts[0] });
  //     } else {
  //       await contract.methods
  //         .addRetailer(address,name,location)
  //         .send({ from: accounts[0] });
  //     }

  //   };
  //   contract && getDetail();
  // }, [state]);

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-white">
            Slow-carb next level shoindxgoitch ethical authentic, poko scenester
          </h1>
          <p className="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="user-type" className="leading-7 text-sm text-gray-400">
                SELECT USER TYPE
              </label>
              <select
                id="user-type"
                name="user-type"
                style={{
                  backgroundColor: '#333', // Change background color
                  color: 'white',          // Change text color
                }}
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="">Select User Type</option>
                <option value="Manufacturer">Manufacturer</option>
                <option value="Warehouse Owner">Warehouse Owner</option>
                <option value="Retailer">Retailer</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="location" className="leading-7 text-sm text-gray-400">
                LOCATION
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="address" className="leading-7 text-sm text-gray-400">
                ADDRESS
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">SIGN UP</button>
          </form>
          <p className="text-xs mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
      </div>
    </section>
  );
}

export default Admin;


