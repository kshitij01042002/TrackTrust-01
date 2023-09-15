import React from 'react';

function Customer() { return (
  <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Customer Table</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Place the orders from this page </p>
    </div>
    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">Product</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Price</th>
            <th class="w-10 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-3">Start</td>
            <td class="px-4 py-3 text-lg text-white">Free</td>
            <td class="w-10 text-center">
            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">BUY</button>
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-gray-800 px-4 py-3">Pro</td>
            <td class="border-t-2 border-gray-800 px-4 py-3 text-lg text-white">$24</td>
            <td class="border-t-2 border-gray-800 w-10 text-center">
            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">BUY</button>
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-gray-800 px-4 py-3">Business</td>
            <td class="border-t-2 border-gray-800 px-4 py-3 text-lg text-white">$50</td>
            <td class="border-t-2 border-gray-800 w-10 text-center">
            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">BUY</button>
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-b-2 border-gray-800 px-4 py-3">Exclusive</td>
            <td class="border-t-2 border-b-2 border-gray-800 px-4 py-3 text-lg text-white">$72</td>
            <td class="border-t-2 border-b-2 border-gray-800 w-10 text-center">
            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">BUY</button>
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-b-2 border-gray-800 px-4 py-3">Exclusive</td>
            <td class="border-t-2 border-b-2 border-gray-800 px-4 py-3 text-lg text-white">$72</td>
            <td class="border-t-2 border-b-2 border-gray-800 w-10 text-center">
            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">BUY</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
)};

export default Customer;
