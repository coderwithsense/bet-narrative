import { Abi } from 'viem';

export const wagmiContractConfig = {
  address: '0x1234567890abcdef1234567890abcdef12345678', // Replace with your contract address
  abi: [
    // Replace with your contract's ABI
    {
      inputs: [
        { internalType: 'address', name: 'owner', type: 'address' }
      ],
      name: 'balanceOf',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' }
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ] as Abi,
};