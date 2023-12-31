import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes,Switch, Route  } from "react-router-dom";
import About from "./components/About"
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import Admin from "./components/Admin";
import Customer from "./components/customer";
import UserData from "./components/UserData";
import { useState, useEffect } from "react";
import AddProduct from "./components/AddProduct";
import Sell from "./components/Sell";
import Manuboard from "./components/manuDashboard";
import Retailer from "./components/retailer_in";
import WarehouseIn from "./components/warehouse_in";
import WarehouseOut from "./components/warehouse_out";
import Verify from "./components/verify";
import Manufacturer from "./components/Manufacturer";
import RetailerIn from "./components/retailer_in";
import RetailerOut from "./components/retailer_out";
import Verifydeli from "./components/verifydeli";
import Admindash from "./components/admindash";

export default function App() {

  const [state, setState] = useState({
    web3: null,
    contract: null,
  });

  const saveState = (state) => {
    console.log(state);
    setState(state);
  };

  return (
    <>
    <Header saveState={saveState}></Header>
    <BrowserRouter>
      <Routes>
        <Route path="/addUser" element={<Admin state={state} />}></Route>
        <Route path="customer" element={<Customer state={state}/>}></Route>
        <Route path="about" element={<About state={state} />}></Route>
        <Route path="/" element={<Main state={state}/>}></Route>
        <Route path="/addProduct" element={<AddProduct state={state} />}></Route>
        <Route path="verify">
          <Route path=":imgId" element={<Verify state={state} />} />
        </Route>

        <Route path="verifydeli">
          <Route path=":imgId" element={<Verifydeli state={state} />} />
        </Route>

        <Route path="/sell" element={<Sell state={state}/>}></Route>
        <Route path="/retailerin" element={<RetailerIn state={state}/>}></Route>
        <Route path="/retailerout" element={<RetailerOut state={state}/>}></Route>
        <Route path="/warehousein" element={<WarehouseIn state={state}/>}></Route>
        <Route path="/manufacturer" element={<Manufacturer state={state}/>}></Route>
        <Route path="/warehouseout" element={<WarehouseOut state={state}/>}></Route>
        {/* <Route path="/verifydeli" element={<Verifydeli state={state}/>}></Route> */}
        <Route path="/admin_dash" element={<Admindash state={state}/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);