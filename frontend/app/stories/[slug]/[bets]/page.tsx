export default async function BetsPage({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
    const slug = (await params).slug;
  
    return (
      <div className="p-6 min-h-screen">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Bets for: {slug.replace("-", " ")}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explore all the active and past bets for this story. Make your
            predictions and earn Betting Tokens!
          </p>
        </div>
  
        {/* Active Bets Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">
            Active Bets
          </h2>
          <div className="space-y-6">
            {/* Example Bet Card */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg transition-transform border border-transparent hover:border-green-500 hover:translate-x-2 hover:translate-y-2">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Who will betray the princess?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Predict the betrayer of the princess in the next chapter.
              </p>
              <p className="text-red-600 dark:text-red-400">
                Deadline: 12 hours remaining
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Place Your Bet
              </button>
            </div>
  
            {/* Additional Example */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg transition-transform border border-transparent hover:border-green-500 hover:translate-x-2 hover:translate-y-2">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Will the princess find the magical amulet?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Cast your predictions and win Betting Tokens!
              </p>
              <p className="text-red-600 dark:text-red-400">
                Deadline: 2 days remaining
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Place Your Bet
              </button>
            </div>
          </div>
        </div>
  
        {/* Past Bets Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">
            Past Bets
          </h2>
          <div className="space-y-6">
            {/* Example Past Bet Card */}
            <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg transition-transform border border-transparent hover:border-green-500 hover:translate-x-2 hover:translate-y-2">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Did the princess escape the castle?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Winning Answer: Yes, with the help of the fox.
              </p>
              <p className="text-green-600 dark:text-green-400">
                Outcome: Rewards Distributed
              </p>
            </div>
  
            {/* Additional Past Bet Example */}
            <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg transition-transform border border-transparent hover:border-green-500 hover:translate-x-2 hover:translate-y-2">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Did the magical forest survive the attack?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Winning Answer: No, it was burned down in the battle.
              </p>
              <p className="text-green-600 dark:text-green-400">
                Outcome: Rewards Distributed
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }