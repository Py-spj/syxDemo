import React from "react";
import "./App.css";
import { Routes } from "./components/Routes";
const App: React.FC = () => {
  return <Routes isAuthorized={true} />;
};

export default App;
