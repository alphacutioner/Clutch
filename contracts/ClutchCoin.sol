pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ClutchCoin is ERC20 {
    constructor(uint256 initialSupply) ERC20("Clutch", "NCAA") {
        _mint(msg.sender, initialSupply);
    }
}