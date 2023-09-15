import React, {useEffect, useState} from 'react';
import Web3 from "web3";

function Main({state}) { 
  const [detail, setDetail] = useState("");
  useEffect(() => {
    const { contract } = state;
    const getDetail = async () => {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const nameText = await contract.methods
        .getAllProducts()
        .call();
      console.log(nameText);
      setDetail(nameText);

      // 

    };
    contract && getDetail();
  }, [state]);
    console.log("Main");

    return(
    <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-2/3 mx-auto">
      <div class="flex flex-wrap w-full bg-gray-800 py-32 px-10 relative mb-4">
          
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">Plan</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Speed</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Storage</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Price</th>
            <th class="w-10 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-3">Start</td>
            <td class="px-4 py-3">5 Mb/s</td>
            <td class="px-4 py-3">15 GB</td>
            <td class="px-4 py-3 text-lg text-white">Free</td>
            <td class="w-10 text-center">
              <input name="plan" type="checkbox"></input>
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-gray-800 px-4 py-3">Pro</td>
            <td class="border-t-2 border-gray-800 px-4 py-3">25 Mb/s</td>
            <td class="border-t-2 border-gray-800 px-4 py-3">25 GB</td>
            <td class="border-t-2 border-gray-800 px-4 py-3 text-lg text-white">$24</td>
            <td class="border-t-2 border-gray-800 w-10 text-center">
              <input name="plan" type="checkbox"></input>
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-gray-800 px-4 py-3">Business</td>
            <td class="border-t-2 border-gray-800 px-4 py-3">36 Mb/s</td>
            <td class="border-t-2 border-gray-800 px-4 py-3">40 GB</td>
            <td class="border-t-2 border-gray-800 px-4 py-3 text-lg text-white">$50</td>
            <td class="border-t-2 border-gray-800 w-10 text-center">
              <input name="plan" type="checkbox"></input>
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-b-2 border-gray-800 px-4 py-3">Exclusive</td>
            <td class="border-t-2 border-b-2 border-gray-800 px-4 py-3">48 Mb/s</td>
            <td class="border-t-2 border-b-2 border-gray-800 px-4 py-3">120 GB</td>
            <td class="border-t-2 border-b-2 border-gray-800 px-4 py-3 text-lg text-white">$72</td>
            <td class="border-t-2 border-b-2 border-gray-800 w-10 text-center">
              <input name="plan" type="checkbox"></input>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div class="flex flex-wrap -mx-2">
        <div class="px-2 w-1/2">
          <div class="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x460"></img>
            <div class="text-center relative z-10 w-full">
              <h2 class="text-xl text-white font-medium title-font mb-2">Shooting Stars</h2>
              <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
              <a class="mt-3 text-indigo-300 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="px-2 w-1/2">
          <div class="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x420"></img>
            <div class="text-center relative z-10 w-full">
              <h2 class="text-xl text-white font-medium title-font mb-2">Shooting Stars</h2>
              <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
              <a class="mt-3 text-indigo-300 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)};

export default Main;
