import { subtitle, title } from "@/components/primitives";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";

const page = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-[#333333] rounded-xl p-2">
        <h1 className={subtitle({ class: "font-extrabold text-xl" })}>
          Hello, {"Akshat"}!
        </h1>
        <div className="m-4">
          <p className="font-semibold">Total Balance</p>
          <div className="flex justify-around">
            <p className="text-2xl font-bold">$ {"1,511"}</p>

            <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
              Withdraw
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#333333] rounded-xl p-2">
        <h1 className={subtitle({ class: "font-extrabold text-xl" })}></h1>
        <div className="m-4">
          <p className="font-semibold">Your Wallet Address</p>
          <p className="mx-2 text-xl font-thin overflow-x-scroll">
            {"0x84fcef2059c8345ce268539c3222df14357ffc90"}
          </p>

          <p className="text-2xl font-bold overflow-x-scroll my-2">
            Total Stories Owned
          </p>
          <p className="mx-2 text-xl font-thin overflow-x-scroll">
            {"5 owned 2 listed"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
