import React from 'react';
import ABI from "./ABI.json";
import { useEffect, useState} from 'react';
import Web3 from "web3";
import { Link } from 'react-router-dom'; 

function Header({ saveState }) {
  const [user, setUser] = useState("Consumer");
  useEffect(() => {
    // Define an async function for fetching user role and update user state
    const fetchUserRole = async () => {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const contract = new web3.eth.Contract(
          ABI,
          "0x31f535A7EfdB675C8FE516080d46Ce75dE4b7a6e"
        );
        saveState({web3: web3, contract: contract})

        const nameText = await contract.methods.getUserRole(accounts[0]).call();
        setUser(nameText); // Update user state based on the fetched role
        console.log(nameText);
        console.log(contract);
        console.log(accounts[0]);
      } catch (err) {
        console.log(err);
      }
    };

    // Call the async function when the component mounts
    fetchUserRole();
  }, []);
  return(
<header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">TrackTrust</span>
    </a>
    
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <>
    {(user === "Manufacturer") ? (
      <>
      <a class="mr-5 hover:text-white" href='/'>Dashboard</a>
      <a class="mr-5 hover:text-white" href='/addProduct'>Add Product</a>
      <a class="mr-5 hover:text-white" href="/sell">Sell</a>
      </>
      ) : (
        <p></p>
      )}
      </>
      <>
    {(user === "Customerds") ? (
      <>
      <a class="mr-5 hover:text-white" href='/'>Home</a>
      </>
      ) : (
        <p></p>
      )}
      </>
      <>
    {(user === "Retailer") ? (
      <>
      <a class="mr-5 hover:text-white" href='/'>Dashboard</a>
      <a class="mr-5 hover:text-white" href='/addProduct'>Add Product</a>
      <a class="mr-5 hover:text-white" href="/sell">Sell</a>
      </>
      ) : (
        <p></p>
      )}
      </>
      <>
    {(user === "Warehouse") ? (
      <>
      <a class="mr-5 hover:text-white" href='/'>Dashboard</a>
      <a class="mr-5 hover:text-white" href='/addProduct'>Add Product</a>
      <a class="mr-5 hover:text-white" href="/sell">Sell</a>
      </>
      ) : (
        <p></p>
      )}
      </>
      <>
    {(user === "Customer") ? (
      <>
      <a class="mr-5 hover:text-white" href='/adminDashboard'>Dashboard</a>
      <a class="mr-5 hover:text-white" href='/addUser'>Add User</a>
      </>
      ) : (
        <p></p>
      )}
      </>
    </nav>
    <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
)};

export default Header;
