import logo from "./logo.svg";
import "./App.css";
import Login from "./Page/Login";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import Dashboard from "./Page/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
