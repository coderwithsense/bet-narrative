import React, { createContext, useContext, ReactNode } from 'react';
import { useReadContract } from 'wagmi';
import { wagmiContractConfig } from '../contracts/readContract';

// Define the shape of the context
interface Web3ContextType {
  balance: string | null;
}

// Create the context
const Web3Context = createContext<Web3ContextType | undefined>(undefined);

interface Web3ProviderProps {
  address?: string; // Wallet address, optional
  children: ReactNode;
}

// Web3ContextProvider component
export const Web3ContextProvider: React.FC<Web3ProviderProps> = ({ address, children }) => {
  const { data: balance } = useReadContract({
    ...wagmiContractConfig,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    enabled: !!address,
  });

  const contextValue: Web3ContextType = {
    balance: balance ? balance.toString() : null,
  };

  return (
    <Web3Context.Provider value={contextValue}>
      {children}
    </Web3Context.Provider>
  );
};

// Custom hook to use the Web3 context
export const useWeb3Context = (): Web3ContextType => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error('useWeb3Context must be used within a Web3ContextProvider');
  }
  return context;
};

// Example usage within a component
export const ReadContractExample: React.FC = () => {
  const { balance } = useWeb3Context();

  return <div>Balance: {balance ?? 'No address provided or no balance available'}</div>;
};
