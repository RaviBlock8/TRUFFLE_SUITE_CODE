pragma solidity ^0.5.1;

contract Dapp{
    uint256 public totalSupply;

    constructor() public {
        totalSupply = 100000;
    }

    function otalSupply() public view returns(uint256){
        return totalSupply;
    }
}