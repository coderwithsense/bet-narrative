"use client";

import CreateSellButton from "@/components/createSellButton";
import CreateStoryButton from "@/components/CreateStoryButton";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Form from "@/components/ui/Form";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Plus } from "lucide-react";
import React from "react";

type Props = {};

const CreatorStoriesCards = [
  {
    title: "Quantum Horizons",
    description:
      "A sci-fi narrative exploring consciousness in a quantum realm.",
    status: "In Progress",
    progress: 65,
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeB5MPB60eYh3HbM-hcSdLtL5xR9XViPmGCA&s",
    lastUpdated: "2 days ago",
    totalBets: 42,
    totalEarnings: 0.5,
  },
  {
    title: "Whispers of Eldoria",
    description:
      "An epic fantasy about a hidden magical kingdom and its forgotten prophecy.",
    status: "Draft",
    progress: 30,
    coverImage:
      "https://ik.imagekit.io/storybird/images/7bcd4965-04b9-4fd0-9a81-1294a1c8f943/0_141700847.webp?tr=q-80",
    lastUpdated: "5 days ago",
    totalBets: 12,
    totalEarnings: 0.2,
  },
  {
    title: "Cybernetic Dreams",
    description:
      "A dystopian tale of human-AI coexistence in a world transformed by technology.",
    status: "Published",
    progress: 100,
    coverImage:
      "https://preview.redd.it/cybernetic-dreams-v0-ws56pvhromvb1.jpg?width=640&crop=smart&auto=webp&s=f66b1ca6666873e483aac5ab096aceb9fd2636e8",
    lastUpdated: "1 week ago",
    totalBets: 87,
    totalEarnings: 1.5,
  },
];

const page = (props: Props) => {
  return (
    <div>
      <CreateStoryButton className="flex justify-end w-full" />
      <TextHoverEffect text="Stories" />
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CreatorStoriesCards.map((item, index) => (
            <Card
              key={index}
              className="hover:border-r-4 bg-black hover:border-b-4 hover:border-green-500 p-4 rounded-lg transition-transform transform hover:scale-105 flex flex-col justify-between border"
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
                </div>
              </div>
              <div className="flex justify-evenly w-full">
                <Button className="bg-red-500 hover:bg-red-600 mt-auto border-red-500 rounded-xl">
                  Sell
                </Button>
                
                <Button className="bg-green-500 hover:bg-green-600 mt-auto border-green-500 rounded-xl">
                  View story
                </Button>
              </div>
            </Card>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
