import React, { useState, useEffect } from 'react';

function Customer() { 
    const [data,setData]=useState([]);
  const getData=()=>{
    fetch('pratha.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Customer Table</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Place the orders from this page </p>
        </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
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
                    <td className="w-10 text-center">
                      <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">BUY</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
  

export default Customer;
