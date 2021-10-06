import React, { useState } from "react";
import search from "../../../media/search.svg";

export default function DummySearch() {
  const [focused, setFocused] = useState(false);
  const backgroundCls = focused
    ? " bg-opacity-60 border-opacity-90"
    : " bg-opacity-40 border-opacity-40";
  return (
    <div
      className={
        "bg-black flex items-center py-2.5 px-6 rounded-sm bg-opacity-40 dummySearch border-b border-white " +
        backgroundCls
      }
    >
      <img src={search} alt="" className="mr-3 h-4" />
      <input
        type="text"
        placeholder="Search maynooth..."
        className="bg-transparent text-sm flex-1 text-white text-opacity-60 focus:outline-none"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}
