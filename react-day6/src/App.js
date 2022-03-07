import React from "react";
import Countainar from "./componant/Countainar";
import OneImg from "./componant/OneImg";
import { Route } from "react-router-dom";
//////
export default function App() {
  return (
    <div>
    {/* <Countainar/> */}
    <Route exact path="/OneImg/:id" component={OneImg} />
      <Route exact path="/" component={Countainar} />
    </div>
  );
}
