// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BettingToken is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("BetNarrativeToken", "BNT") Ownable(msg.sender) {
        // Mint the initial supply to the contract deployer
        _mint(msg.sender, initialSupply);
    }

    /// @dev Function to mint new tokens. Only the owner can call this function.
    /// @param to Address to receive the newly minted tokens.
    /// @param amount Amount of tokens to mint.
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    /// @dev Function to transfer ownership to a new address.
    /// @param newOwner Address of the new owner.
    function changeOwnership(address newOwner) external onlyOwner {
        transferOwnership(newOwner);
    }
}
