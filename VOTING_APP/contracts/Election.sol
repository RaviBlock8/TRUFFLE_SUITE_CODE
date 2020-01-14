pragma solidity ^0.5.1;

contract Election{
    //modle a candidate
    struct Candidate{
        uint id;
        string name;
        uint voteCount;
    }

    // store the candidates
    mapping(uint => Candidate) public candidates;
    //candidate count
    uint public candidatesCount;
    string public candidate1;
    constructor() public{
        addCandidates("Ravi");
        addCandidates("Anuj")
    }

    function addCandidates(string _name) private{
        candidatesCount += 1;
        candidates[candidatesCount] = Candidate(candidatesCount,_name,0);
    }
}