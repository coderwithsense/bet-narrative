import CustomSellButton from "@/components/ui/CustomSellButton";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image"; // Import Next.js Image component for optimized images

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <div className="p-6 space-y-8  min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <Image
            src="/fairytrading.png"
            alt="Fairy Trading View"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
            Token Information
          </h2>
          <ul className="space-y-2">
            <li className="text-gray-600 dark:text-gray-400">
              <strong>Current Price:</strong> $1.25
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              <strong>24h Volume:</strong> 30,000 Betting Tokens
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              <strong>Market Cap:</strong> $120,000
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              <strong>Owner's Tokens:</strong> 5,000 Betting Tokens
            </li>
          </ul>

          {/* Buy and Sell Buttons */}
          <CustomSellButton/>
        </div>
      </div>

      {/* Header Section */}
      <div className="space-y-4">
        <TextGenerateEffect words="Alice's Adventures in Wonderland" />
        {/* <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          {slug.replace("-", " ")}
        </h1> */}
        <p className="text-gray-600 dark:text-gray-400">
          A young girl named Alice falls through a rabbit hole into a fantasy
          world.
        </p>
      </div>

      {/* Story Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Story Overview */}
        <div className="col-span-2 p-6 bg-white dark:bg-gray-800 rounded-2xl">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
            Story Overview
          </h2>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-600 dark:text-gray-400">
              <strong>Genre:</strong> Fantasy, Adventure
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              <strong>Status:</strong> Ongoing
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              <strong>Market Cap:</strong> 120,000 Betting Tokens
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              <strong>Betting Volume:</strong> 30,000 Betting Tokens
            </li>
          </ul>
        </div>

        {/* Owner Actions */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
            Owner Actions
          </h2>
          <div className="mt-4 space-y-4">
            <button
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              id="continue-story-btn"
            >
              Continue Story
            </button>
            <button className="w-full px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
              Create Betting Stage
            </button>
          </div>
        </div>
      </div>

      {/* Chapters Section */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
          Chapters
        </h2>
        <ul className="mt-4 space-y-4">
          <li>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Chapter 1: The Beginning
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              A young princess finds herself lost in the woods.{" "}
              <span className="text-blue-600 dark:text-blue-400 cursor-pointer">
                Read more
              </span>
            </p>
          </li>
          <li>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Chapter 2: The Enchanted Forest
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              She discovers a talking fox who guides her to a magical kingdom.{" "}
              <span className="text-blue-600 dark:text-blue-400 cursor-pointer">
                Read more
              </span>
            </p>
          </li>
        </ul>
      </div>

      {/* Betting Section */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
          Active Bets
        </h2>
        <ul className="mt-4 space-y-4">
          <li>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Who will betray the princess?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Predict the betrayer of the princess in the next chapter.{" "}
              <span className="text-red-600 dark:text-red-400">
                Deadline: 12 hours
              </span>
            </p>
          </li>
          <li>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Will the princess find the magical amulet?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Cast your predictions and win Betting Tokens!{" "}
              <span className="text-red-600 dark:text-red-400">
                Deadline: 2 days
              </span>
            </p>
          </li>
        </ul>
      </div>

      {/* Characters Section */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
          Characters
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <Image
              src="https://static.vecteezy.com/system/resources/thumbnails/029/194/806/small_2x/cute-girl-princess-generate-ai-photo.jpg"
              alt="Princess"
              width={80}
              height={80}
              className="w-20 h-20 mx-auto rounded-full"
            />
            <h3 className="mt-2 text-lg font-bold text-gray-800 dark:text-white">
              The Princess
            </h3>
            <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
              Talk to Character
            </button>
          </div>
          <div className="text-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Vulpes_vulpes_ssp_fulvus.jpg/800px-Vulpes_vulpes_ssp_fulvus.jpg"
              alt="Fox"
              width={80}
              height={80}
              className="w-20 h-20 mx-auto rounded-full"
            />
            <h3 className="mt-2 text-lg font-bold text-gray-800 dark:text-white">
              The Talking Fox
            </h3>
            <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
              Talk to Character
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
