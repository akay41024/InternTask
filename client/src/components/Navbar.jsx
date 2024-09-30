// import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between p-5 dark:bg-slate-950">
      <h1 className="px-5 py-2 ml-4 text-sm font-medium text-green-500 lg:text-xl dark:text-white">Manage User</h1>
      <div className="flex gap-7">
        <CiSearch className="mt-2 text-gray-800 cursor-pointer md:mt-1 size-5 dark:text-white lg:size-7 "/>
        <Link to={"/add"}>
        <button
          type="button"
          className="flex gap-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
          >
          <IoMdAddCircleOutline className="font-bold size-5" />Add
        </button>
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;
