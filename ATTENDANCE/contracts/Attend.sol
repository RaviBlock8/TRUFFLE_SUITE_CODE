pragma solidity ^0.5.1;

contract Attend{
    struct Student{
        uint id;
        string name;
    }
    struct Record{
        string name;
        string date;
        string status;

    }

    event Call(
        string name,
        string date,
        string status
    );

    mapping(string => mapping(string => Record)) public stud_record;

    function rollCall(string memory _name,string memory _date) public{
        stud_record[_name][_date] = Record(_name,_date,"p");
    }

    function getAttendance(string memory _name,string memory _date) public view returns(string memory){
        return stud_record[_name][_date].status;
    }
}