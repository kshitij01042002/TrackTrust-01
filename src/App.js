import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import About from "./components/About"
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import Admin from "./components/Admin";
import Customer from "./components/customer";
import { useState } from "react";

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
        <Route path="admin" element={<Admin />}></Route>
        <Route path="customer" element={<Customer />}></Route>
        <Route path="about" element={<About state={state} />}></Route>
        <Route path="/" element={<Main state={state}/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);