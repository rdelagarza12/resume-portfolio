// src/App.jsx
import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";   // adjust path if needed
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <div className="navigation-div">
        <NavigationBar />        {/* rendered once and persists */}
      </div>
      <main className="page-wrapper">
        <Outlet />             {/* child route swaps here */}
      </main>
    </div>
  );
}
