import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

import { UserAuthContextProvider } from "./UserAuthContext";
import Payment from "./Payment";

function App() {
  return (
    <UserAuthContextProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/payment" element={<Payment />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </UserAuthContextProvider>
  );
}

export default App;
