import Web3 from "web3";
import React, {useEffect, useState} from "react";
import { Chart } from "react-google-charts";

export const options = {
    title: "My Daily Activities",
    is3D: true,
  };

function Manuboard({state}) { 
    const [detail, setDetail] = useState([]);
    var available=0;
    var delivered=0;
    var other=0;

  useEffect(() => {
    const { contract } = state;
    const getDetail = async () => {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const products = await contract.methods
        .getAllProducts()
        .call();
      console.log(products);
      setDetail(products);
    };
    contract && getDetail();
  }, [state]);

  console.log(detail)
  detail.forEach((item) =>{
      if(item.stage == 0) {
        available++;
      }
      else if(item.stage == 7) {
        delivered++;
      } else {
        other++;
      }
  })
  
const data = [
    ["Task", "Hours per Day"],
    ["Delivered", delivered],
    ["In Transit", other],
    ["Available", available],
  ];

    return(
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"300px"}
      background-color={"rgb(31 41 55 / var(--tw-bg-opacity))"}
    />
)};

export default Manuboard;
