pragma solidity ^0.5.0;

contract Split {
    
    event LogCreation(address indexed owner);
    event LogSplitDetails(address indexed first, address indexed second, uint256 indexed amount);
    
    address public owner;
    mapping(address => uint256) public balances;
    
    constructor () public  {
        owner = msg.sender;
        emit LogCreation(owner);
    }
    
    function devide(address firstBeneficiary,address secondBeneficiary) public payable {
        require(firstBeneficiary != address(0));
        require(secondBeneficiary != address(0));
        require(msg.value != 0);
        
        uint remainder = msg.value % 2;
        uint half = (msg.value - remainder) / 2;
        balances[msg.sender] += remainder;
        balances[firstBeneficiary] += half;
        balances[secondBeneficiary] += half;
        
        emit LogSplitDetails(firstBeneficiary,secondBeneficiary,half);
    }
}
