import React from "react";
import Nav from "../../Header/Nav";
import DummySearch from "./DummySearch";
import "./Home.css";

export default function Home() {
  return (
    <div className="showcase h-screen">
      <div className="overlay"></div>
      <Nav transparent={true} />
      <div className='flex flex-col items-center'>
        <DummySearch />
      </div>
    </div>
  );
}
