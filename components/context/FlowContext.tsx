import React, { createContext, useContext, useState, ReactNode } from "react";

type Story = {
  title: string;
  description: string;
  coverImage: string;
};

type NFTCard = {
  title: string;
  description: string;
  coverImage: string;
  ownerImage: string;
  ownerName: string;
  ownerVerified: boolean;
};

type CreatorStoriesContextType = {
  stories: Story[];
  updateStory: (index: number, updatedStory: Story) => void;
  addStory: (newStory: Story) => void;
  nftCards: NFTCard[];
  updateNFTCard: (index: number, updatedNFTCard: NFTCard) => void;
  addNFTCard: (newNFTCard: NFTCard) => void;
  nftCards2: NFTCard[];
  updateNFTCard2: (index: number, updatedNFTCard: NFTCard) => void;
  addNFTCard2: (newNFTCard: NFTCard) => void;
};

const CreatorStoriesContext = createContext<
  CreatorStoriesContextType | undefined
>(undefined);

export const CreatorStoriesProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [stories, setStories] = useState<Story[]>([
    {
      title: "Quantum Horizons",
      description:
        "A sci-fi narrative exploring consciousness in a quantum realm.",
      coverImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeB5MPB60eYh3HbM-hcSdLtL5xR9XViPmGCA&s",
    },
    {
      title: "Whispers of Eldoria",
      description:
        "An epic fantasy about a hidden magical kingdom and its forgotten prophecy.",
      coverImage:
        "https://ik.imagekit.io/storybird/images/7bcd4965-04b9-4fd0-9a81-1294a1c8f943/0_141700847.webp?tr=q-80",
    },
    {
      title: "Alice's Adventures in Wonderland",
      description:
        "A young girl named Alice falls through a rabbit hole into a fantasy world.",
      coverImage:
        "https://m.media-amazon.com/images/I/91uMrXq+4RL._AC_UF1000,1000_QL80_.jpg",
    },
  ]);

  const [nftCards, setNftCards] = useState<NFTCard[]>([
    {
      title: "The Adventures of Sherlock Holmes",
      description:
        "A collection of twelve short stories featuring Conan Doyle's legendary detective.",
      coverImage:
        "https://m.media-amazon.com/images/M/MV5BNjg3NjY5NGUtZTlkNS00NGE2LWJhMTAtZTlkZDgzZDBhOWY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      ownerImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Arthur_Conan_Doyle_by_Walter_Benington%2C_1914.png/800px-Arthur_Conan_Doyle_by_Walter_Benington%2C_1914.png",
      ownerName: "Arthur Conan Doyle",
      ownerVerified: true,
    },
    {
      title: "Alice's Adventures in Wonderland",
      description:
        "A young girl named Alice falls through a rabbit hole into a fantasy world.",
      coverImage:
        "https://m.media-amazon.com/images/I/91uMrXq+4RL._AC_UF1000,1000_QL80_.jpg",
      ownerImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/LewisCarrollSelfPhoto.jpg/220px-LewisCarrollSelfPhoto.jpg",
      ownerName: "Lewis Carroll",
      ownerVerified: true,
    },
    {
      title: "The Wonderful Wizard of Oz",
      description:
        "The story of Dorothy and her dog Toto, who are swept away to the magical land of Oz.",
      coverImage:
        "https://cdn.britannica.com/39/187139-050-A8668502/page-WW-Denslow-L-Frank-Baum-The.jpg",
      ownerImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh2-Hmug-r9ZxxRYn6nV6HIxeAuG5JbFE6OA&s",
      ownerName: "L. Frank Baum",
      ownerVerified: true,
    },
  ]);

  const [nftCards2, setNftCards2] = useState<NFTCard[]>(
    nftCards.filter((card) => card.title !== "Alice's Adventures in Wonderland")
  );

  const updateStory = (index: number, updatedStory: Story) => {
    setStories((prevStories) =>
      prevStories.map((story, i) => (i === index ? updatedStory : story))
    );
  };

  const addStory = (newStory: Story) => {
    setStories((prevStories) => [...prevStories, newStory]);
  };

  const updateNFTCard = (index: number, updatedNFTCard: NFTCard) => {
    setNftCards((prevCards) =>
      prevCards.map((card, i) => (i === index ? updatedNFTCard : card))
    );
  };

  const addNFTCard = (newNFTCard: NFTCard) => {
    setNftCards((prevCards) => [...prevCards, newNFTCard]);
  };

  const updateNFTCard2 = (index: number, updatedNFTCard: NFTCard) => {
    setNftCards2((prevCards) =>
      prevCards.map((card, i) => (i === index ? updatedNFTCard : card))
    );
  };

  const addNFTCard2 = (newNFTCard: NFTCard) => {
    setNftCards2((prevCards) => [...prevCards, newNFTCard]);
  };

  return (
    <CreatorStoriesContext.Provider
      value={{
        stories,
        updateStory,
        addStory,
        nftCards,
        updateNFTCard,
        addNFTCard,
        nftCards2,
        updateNFTCard2,
        addNFTCard2,
      }}
    >
      {children}
    </CreatorStoriesContext.Provider>
  );
};

export const useCreatorStories = () => {
  const context = useContext(CreatorStoriesContext);
  if (!context) {
    throw new Error(
      "useCreatorStories must be used within a CreatorStoriesProvider"
    );
  }
  return context;
};
