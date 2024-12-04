// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Example uri
// {
//   "name": "Golden Dragon",
//   "description": "A majestic dragon with golden scales, symbolizing power and wealth.",
//   "image": "ipfs://QmXnGoLd3NDrAg0nHaSh", 
// }

contract BetNarrativeNFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;

    constructor() ERC721("BetNarrativeNFT", "BNT") Ownable(msg.sender) {
        _tokenIdCounter = 0;
    }

    function mint(address to, string memory uri) external onlyOwner {
        _tokenIdCounter++;
        uint256 newTokenId = _tokenIdCounter;

        _safeMint(to, newTokenId);

        _setTokenURI(newTokenId, uri);
    }

    function changeOwnership(address newOwner) external onlyOwner {
        transferOwnership(newOwner);
    }
}
