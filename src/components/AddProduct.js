import React, {useEffect, useState} from 'react';
import Web3 from "web3";

function AddProduct({ state }) {
  // Define state variables to store form input values
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const changeContract = async (event) => {
    try {
      if (
        name !== "" &&
        description !== "" &&
        price !== ""
      ) {
        event.preventDefault();
        console.log("Yoo");
        const { contract, web3 } = state;
        console.log(web3)
        const accounts = await web3.eth.getAccounts();
        await contract.methods
          .addProduct(name, description, Number(price))
          .send({ from: accounts[0] });
        console.log("Hii");
      }
    } catch (error) {
      console.log(error);
    }
  };
    

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a product object with the form input values
    const product = {
      name,
      description,
      price,
    };

    // Log the product data to the console
    console.log('Product Data:', product);
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Add Product</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Add a new product with the following details:</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <form onSubmit={handleSubmit} style={{
                width: "100%"
            }}>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="description" className="leading-7 text-sm text-gray-400">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="price" className="leading-7 text-sm text-gray-400">Price</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit" onClick={changeContract}>Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddProduct;
