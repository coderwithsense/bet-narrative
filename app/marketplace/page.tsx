"use client";

import React, { useEffect, useState } from "react";
import { useCreatorStories } from "@/components/context/FlowContext";
import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card-hover-effect";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Button } from "@nextui-org/button";
const Marketplace = () => {
  const { nftCards2 } = useCreatorStories();
  const [randomPrices, setRandomPrices] = useState<number[]>([]);

  useEffect(() => {
    const prices = nftCards2.map(
      () => Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000
    );
    setRandomPrices(prices);
  }, []);

  return (
    <div>
      <TextHoverEffect text="Market" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {nftCards2.map((item, index) => (
          <Card
            key={index}
            className="hover:border-r-4 hover:border-b-4 hover:border-green-500 p-4 rounded-lg transition-transform transform hover:scale-105 flex flex-col justify-between border bg-black"
          >
            <div>
              <img
                src={item.coverImage}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg border rounded-xl"
              />
              <div className="p-4">
                <CardTitle className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-300 mb-4">
                  {item.description}
                </CardDescription>
                <p className="text-lg font-bold mb-4 text-white">
                  Price: {randomPrices[index]} {"BNT"}
                </p>
                <div className="owner-info flex items-center mb-4">
                  <img
                    src={item.ownerImage}
                    alt={item.ownerName}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <p className="text-sm text-white">
                    {item.ownerName}{" "}
                    {item.ownerVerified && (
                      <span className="text-green-500">✔️</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <Button className="w-full bg-green-500 hover:bg-green-600 mt-auto">
              Buy
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
