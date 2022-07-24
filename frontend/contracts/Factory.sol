// SPDX-License-Identifier: Unlicensed

pragma solidity >0.7.0 <=0.9.0;

import "./donate.sol";

contract CreatorFactory {
    address[] public deployedCreators;
    

    event creatorCreated(
        string name,
        address indexed owner,
        address creatorAddress,
        uint indexed timestamp
    );

    function createCreator(string memory creatorName) public
        
    {

        Creator newCreator = new Creator(creatorName,msg.sender);
        deployedCreators.push(address(newCreator));
                                
        emit creatorCreated(
            creatorName,  
            msg.sender, 
            address(newCreator),
            block.timestamp
        );

    }
}

