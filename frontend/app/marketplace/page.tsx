import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card-hover-effect";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Button } from "@nextui-org/button";
import React from "react";

const NFTCards = [
  {
    title: "The Adventures of Sherlock Holmes",
    description:
      "A collection of twelve short stories featuring Conan Doyle's legendary detective.",
    listedPrice: "150",
    currency: "BNT Token",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjg3NjY5NGUtZTlkNS00NGE2LWJhMTAtZTlkZDgzZDBhOWY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    owner: "0x1234",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Arthur_Conan_Doyle_by_Walter_Benington%2C_1914.png/800px-Arthur_Conan_Doyle_by_Walter_Benington%2C_1914.png",
    ownerName: "Arthur Conan Doyle",
    ownerVerified: true,
  },
  {
    title: "Alice's Adventures in Wonderland",
    description:
      "A young girl named Alice falls through a rabbit hole into a fantasy world.",
    listedPrice: "850",
    currency: "BNT Token",
    image:
      "https://m.media-amazon.com/images/I/91uMrXq+4RL._AC_UF1000,1000_QL80_.jpg",
    owner: "0x1234",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/LewisCarrollSelfPhoto.jpg/220px-LewisCarrollSelfPhoto.jpg",
    ownerName: "Lewis Carroll",
    ownerVerified: true,
  },
  {
    title: "The Wonderful Wizard of Oz",
    description:
      "The story of Dorothy and her dog Toto, who are swept away to the magical land of Oz.",
    listedPrice: "750",
    currency: "BNT Token",
    image:
      "https://cdn.britannica.com/39/187139-050-A8668502/page-WW-Denslow-L-Frank-Baum-The.jpg",
    owner: "0x1234",
    ownerImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh2-Hmug-r9ZxxRYn6nV6HIxeAuG5JbFE6OA&s",
    ownerName: "L. Frank Baum",
    ownerVerified: true,
  },
  {
    title: "Peter Pan",
    description:
      "The story of a mischievous boy who can fly and never grows up.",
    listedPrice: "2000",
    currency: "BNT Token",
    image: "https://i.ytimg.com/vi/UiDfKtNliOw/maxresdefault.jpg",
    owner: "0x1234",
    ownerImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbsi96pRzuLWmmsb7hQ3QjQnPPSpxlr-tpA&s",
    ownerName: "J.M. Barrie",
    ownerVerified: true,
  },
  {
    title: "The Jungle Book",
    description:
      "A collection of stories about a boy named Mowgli who is raised by wolves in the Indian jungle.",
    listedPrice: "3500",
    currency: "BNT Token",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToRHVyyBfYTIYW9HTaOGccdfGj5B2lOwq0Zw&s",
    owner: "0x1234",
    ownerImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQ8dmuWeHd9TsRyL41xuXpRsZAWTBjwhygQ&s",
    ownerName: "Rudyard Kipling",
    ownerVerified: true,
  },
  {
    title: "Treasure Island",
    description: "An adventure novel about buccaneers and buried gold.",
    listedPrice: "1250",
    currency: "BNT Token",
    image:
      "https://m.media-amazon.com/images/I/71fi+jN6QpS._UF1000,1000_QL80_.jpg",
    owner: "0x1234",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/Robert_Louis_Stevenson_by_Henry_Walter_Barnett_bw.jpg",
    ownerName: "Robert Louis Stevenson",
    ownerVerified: true,
  },
  {
    title: "Grimm's Fairy Tales",
    description:
      "A collection of German folktales collected by the Grimm brothers.",
    listedPrice: "100",
    currency: "BNT Token",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/kzfvzww0/book/i/r/u/grimm-s-fairy-tales-original-imagbgyagpkr9rha.jpeg?q=20&crop=false",
    owner: "0x1234",
    ownerImage:
      "https://cdn.britannica.com/84/11384-050-5825DA96/Jacob-oil-portrait-Wilhelm-Grimm-Elisabeth-Jerichau-Baumann-1855.jpg",
    ownerName: "Brothers Grimm",
    ownerVerified: false,
  },
];

const Marketplace = () => {
  return (
    <div>
      <TextHoverEffect text="Market" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {NFTCards.map((item, index) => (
          <Card
            key={index}
            className="hover:border-r-4 hover:border-b-4 hover:border-green-500 p-4 rounded-lg transition-transform transform hover:scale-105 flex flex-col justify-between border bg-black"
          >
            <div>
              <img
                src={item.image}
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
                  Price: {item.listedPrice} {item.currency}
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
