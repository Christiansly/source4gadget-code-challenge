import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Layout from "./container/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SearchPost from "./pages/SearchPost";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="search-post" element={<SearchPost />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
