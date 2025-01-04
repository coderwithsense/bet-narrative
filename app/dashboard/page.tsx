"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, ArrowUpRight, Copy, Layout, BadgeCheck } from "lucide-react";
import { useUserDetailsContext } from "@/components/context/UserContext";

const Dashboard = () => {
  const { user, userAddress } = useUserDetailsContext();

  const truncateAddress = (address: String) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  // if (!user) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="bg-red-100 p-4 rounded-md shadow-md">
  //         <p className="text-red-600">Error: User not found</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user}!</h1>
          <p className="text-gray-500 mt-1">Here's your dashboard overview</p>
        </div>
        <Button className="flex items-center gap-2">
          <Layout className="w-4 h-4" />
          View Gallery
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Balance Card */}
        <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <CardHeader>
            <CardTitle className="text-lg font-medium opacity-80">
              Total Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-4xl font-bold">$1,511</p>
                <p className="text-sm opacity-80 mt-1">
                  Available for withdrawal
                </p>
              </div>
              <Button
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <ArrowUpRight className="w-4 h-4 mr-2" />
                Withdraw
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Wallet Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium">
                Wallet Details
              </CardTitle>
              <Wallet className="w-5 h-5 text-gray-500" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Connected Wallet</p>
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm">
                  {truncateAddress(
                    "0x84fcef2059c8345ce268539c3222df14357ffc90"
                  )}
                </span>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="pt-4 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Stories Owned</p>
                  <p className="text-2xl font-bold mt-1">5</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Listed for Sale</p>
                  <p className="text-2xl font-bold mt-1">2</p>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-gray-500">Verified</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
