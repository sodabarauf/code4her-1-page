import React from "react";

export default function SearchBar() {
  return (
    <div className="flex gap-2 bg-gray-100 p-4 rounded-3xl shadow w-full max-w-3xl mx-auto mt-6">
      <div className="flex gap-2 items-center bg-white p-3 mx-auto rounded-3xl shadow w-full max-w-3xl">
        <input type="text" placeholder="Find a job" className="flex-1 p-2 rounded-full outline-none" />
        <div className="w-px h-8 bg-gray-500"></div>
        <select className="px-4 py-2 rounded-full text-gray-600">
          <option>Localization</option>
        </select>
      </div>
      <button className="px-10 py-3 mx-2 bg-pink-500 text-white rounded-3xl text-xl">Search</button>
    </div>
  );
}
  