import React from "react";

import Nav from "../../Header/Nav";
import DummySearch from "./DummySearch";

export default function Showcase() {
  return (
    <div className="showcase h-screen">
      <div className="overlay"></div>
      <Nav transparent={true} />
      <div className="flex flex-col items-center justify-center mt-20">
        <DummySearch />
        <div className="text-center mt-10" style={{ maxWidth: "1050px" }}>
          <h1 className="lora text-4xl mb-2">
            Welcome to the future of modern furniture design
          </h1>
          <p className="text-sm mb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            vel veniam, eligendi aspernatur aut est quia. Hic quia vero quos?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi illo
            voluptatibus debitis explicabo aperiam veritatis praesentium quo,
            ipsum aspernatur id? Dignissimos ducimus deserunt alias optio autem!
            Accusantium, deserunt necessitatibus. Quae dolorum eaque voluptates
            architecto voluptate voluptas natus fugit neque totam.
          </p>
          <a
            href="#"
            className="py-2.5 px-10 inline-block bg-comp rounded-sm text-sm"
          >
            Contact Now
          </a>
        </div>
      </div>
    </div>
  );
}
