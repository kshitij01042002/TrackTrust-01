import React from 'react';

function Admin() { return(
<section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 class="title-font font-medium text-3xl text-white">
          Slow-carb next level shoindxgoitch ethical authentic, poko scenester
        </h1>
        <p class="leading-relaxed mt-4">
          Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.
        </p>
      </div>
      <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 class="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
        <div class="relative mb-4">
          <label for="user-type" class="leading-7 text-sm text-gray-400">
            SELECT USER TYPE
          </label>
          <select
            id="user-type"
            name="user-type"
            style={{
                backgroundColor: '#333', // Change background color
                color: 'white',          // Change text color
              }}
            class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          >
            <option value="">Select User Type</option>
            <option value="Manufacturer">Manufacturer</option>
            <option value="Warehouse Owner">Warehouse Owner</option>
            <option value="Retailer">Retailer</option>
          </select>
        </div>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-400">
            NAME
          </label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="location" class="leading-7 text-sm text-gray-400">
            LOCATION
          </label>
          <input
            type="text"
            id="location"
            name="location"
            class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-400">
            ADDRESS
          </label>
          <input
            type="text"
            id="address"
            name="address"
            class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">SIGN UP  </button>
        <p class="text-xs mt-3">Literally you probably haven't heard of them jean shorts.</p>
      </div>
    </div>
  </section>
)};

export default Admin;
