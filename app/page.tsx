import { BackgroundLines } from "@/components/ui/background-lines";

export default function Home() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        BetNarratives <br /> AI Powered GameFI.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Write to earn, bet to win. BetNarratives is a decentralized platform that allows you to create, bet on predicting next chapters, and earn on stories powered by AI
      </p>
    </BackgroundLines>
  );
}
