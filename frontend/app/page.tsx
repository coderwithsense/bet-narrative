import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-teal-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 my-10">
        {/* Adjusted spacing */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-teal-800 mb-6">
            Story writing/selling dapp
          </h1>
          <p className="text-2xl text-teal-600 max-w-2xl mx-auto leading-relaxed">
            Signup/Login to start writing your story or sell your story to the world.
          </p>
        </div>
      </main>
    </div>
  );
}
