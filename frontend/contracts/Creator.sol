// SPDX-License-Identifier: Unlicensed

pragma solidity >0.7.0 <=0.9.0;

import "./Factory.sol";

contract Creator {
    string public name;
    address payable public owner;
    uint public receivedAmount;

    event donated(address indexed donar, uint indexed amount, uint indexed timestamp);

    constructor(
        string memory creatorName, 
        address creatorOwner
    ) {
        name = creatorName;
        owner = payable(creatorOwner);
    }

    function donate() public payable {
        owner.transfer(msg.value);
        receivedAmount += msg.value;
        emit donated(msg.sender, msg.value, block.timestamp);
    }
}