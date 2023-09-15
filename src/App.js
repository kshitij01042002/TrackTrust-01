import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import About from "./components/About"
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import Customer from "./components/customer";

export default function App() {
  return (
    <>
    <Header></Header>
    <BrowserRouter>
      <Routes>
        <Route path="about" element={<About />}></Route>
        <Route path="customer" element={<Customer />}></Route>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);