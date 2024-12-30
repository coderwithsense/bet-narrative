import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const CreateSellButton = ({ className }: { className?: string }) => {
  const [bntTokens, setBntTokens] = useState("");

  const handleSell = () => {
    console.log("Selling BNT tokens:", bntTokens);
  };

  return (
    <div className={className}>
      <Modal>
        <ModalTrigger className="btn-primary">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-1">
              SELL BNT <Plus />
            </span>
          </button>
        </ModalTrigger>

        <ModalBody>
          <ModalContent>
            <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
              Sell BNT Tokens
            </h2>
            <div className="space-y-4 max-h-[70vh] overflow-y-auto p-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  BNT Tokens
                </label>
                <Input
                  type="number"
                  value={bntTokens}
                  onChange={(e) => setBntTokens(e.target.value)}
                  placeholder="Enter number of BNT tokens"
                />
              </div>
            </div>

            <ModalFooter>
              <Button
                variant="ghost"
                className="w-full"
                onClick={handleSell}
              >
                Sell Tokens
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CreateSellButton;
