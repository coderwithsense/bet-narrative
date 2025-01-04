import { Inter } from "next/font/google";

import OCIDProvider from "../components/OCIDProvider";

import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Providers } from "./providers";
import { CreatorStoriesProvider } from "@/components/context/FlowContext";
import CreatorStoriesWrapper from "./FlowProvider";
import { UserDetailsContextProvider } from "@/components/context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bet-Narrative",
  description:
    "A starter kit for building (Dapps) on the Open Campus L3 (EduChain), powered by create-edu-dapp.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class" }}>
          <CreatorStoriesWrapper>
            <UserDetailsContextProvider>
              <div className="relative flex flex-col h-screen">
                <Navbar />
                <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                  <OCIDProvider>{children}</OCIDProvider>
                </main>
              </div>
            </UserDetailsContextProvider>
          </CreatorStoriesWrapper>
        </Providers>
      </body>
    </html>
  );
}
