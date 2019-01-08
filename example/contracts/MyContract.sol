pragma solidity ^0.5.0;

contract MyContract {
    bool isAlive;
    bool isRunning;
    address public owner;
    
    event LogSetIsAlive(address indexed sender, bool newState);
    event LogChangeOwner(address sender, address newOwner);
    event LogPauseContract(address sender);
    event LogResumedContract(address sender);
    
    modifier onlyOwner{
        require(msg.sender == owner);
        _;
    }
    modifier onlyIfRunning{
        require(isRunning);
        _;
    }
    
    constructor() public {
        isAlive = true;
        isRunning = true;
        owner = msg.sender;
    }
    function getIsAlive() public view returns(bool isIndeed){
        return isAlive;
    }
    function add(uint x, uint y) public pure returns(uint sum) {
        return x+y;
    }
    function setIsAlive(bool input) public onlyOwner onlyIfRunning returns (bool success){
        isAlive = input;
        emit LogSetIsAlive(msg.sender,input);
        return true;
    }
    function changeOwner(address newOwner) public onlyOwner onlyIfRunning returns(bool success){
        owner = newOwner;
        emit LogChangeOwner(msg.sender, newOwner);
        return true;
    }
    function pauseContract() public onlyOwner onlyIfRunning returns (bool success) {
        isRunning = false;
        emit LogPauseContract(msg.sender);
        return true;
    }
    function resumeContract() public onlyOwner returns (bool success) {
        isRunning = true;
        emit LogResumedContract(msg.sender);
        return true;
    }
}
