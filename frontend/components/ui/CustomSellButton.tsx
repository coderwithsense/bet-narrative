"use client";
import React, { useState } from "react";
import { useCreatorStories } from "@/components/context/FlowContext";

type Props = {};

const CustomSellButton = (props: Props) => {
  const { addNFTCard2 } = useCreatorStories();
  const [buttonText, setButtonText] = useState("Sell Tokens"); // Initial button text

  const handleSell = () => {
    // Add the NFT card
    addNFTCard2({
      title: "Alice's Adventures in Wonderland",
      description:
        "A young girl named Alice falls through a rabbit hole into a fantasy world.",
      coverImage:
        "https://m.media-amazon.com/images/I/91uMrXq+4RL._AC_UF1000,1000_QL80_.jpg",
      ownerImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/LewisCarrollSelfPhoto.jpg/220px-LewisCarrollSelfPhoto.jpg",
      ownerName: "Lewis Carroll",
      ownerVerified: true,
    });

    // Update button text
    setButtonText("Listed");

    // Optional: Add delay for redirection if require
  };

  return (
    <div>
      <div className="flex space-x-4">
        <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
          Buy Tokens
        </button>
        <button
          onClick={handleSell}
          className={`px-6 py-3 ${
            buttonText === "Listed"
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          } text-white rounded-full transition`}
          disabled={buttonText === "Listed"} // Disable button after listing
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CustomSellButton;
