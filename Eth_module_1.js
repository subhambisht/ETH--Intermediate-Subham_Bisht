// For this project, write a smart contract that implements the require(), assert() and revert() statements.

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Smart_Contract {
    address public owner;      // Declare a public state variable to store the contract owner's address
    uint256 public value;      // Declare a public state variable to store a value
    constructor() {
        owner = msg.sender;
    }
  // Modifier to restrict access to certain functions only to the owner
    modifier only_Owner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }
  // Function to set a new value, restricted to the owner
    function set_Value(uint256 newValue) public only_Owner {
        require(newValue > 0, "Value must be greater than zero");
        value = newValue;
        assert(value == newValue);
    }
  // Function that always reverts with a custom error message
    function force_Revert() public pure {
        revert("This function always reverts");
    }
    function check_Invariant() public view {
        assert(owner != address(0));
    }
  // Special function to handle receiving Ether
    receive() external payable {}
  // Fallback function to handle any data or Ether sent to the contract that does not match any function
    fallback() external payable {}
}






