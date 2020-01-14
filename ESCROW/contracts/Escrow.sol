pragma solidity ^0.5.1;

contract Escrow{
    address agent;
    mapping(address => uint256) public deposits;

    constructor() public{
        agent = msg.sender;
    }

    modifier onlyAgent{
        require(agent == msg.sender,"not the agent");
        _;
    }

    function deposit(address payee) public onlyAgent payable {
        deposits[payee] = msg.value;
    }

    function withdraw(address payable payee) public onlyAgent{
        payee.transfer(deposits[payee]);
        deposits[payee] = 0;
    }
}