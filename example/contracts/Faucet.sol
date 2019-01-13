pragma solidity ^0.5.0;

contract Faucet {
    address payable public owner;
    uint256 sendAmount;

    constructor() public payable {
        owner = msg.sender;
        sendAmount = 1 ether;
    }

    function getBalance() public view returns (uint) {
         return address(this).balance;
    }

    function getWei() public {
        msg.sender.transfer(sendAmount);
    }

    function sendWei(address payable toWhom) public {
        address(toWhom).transfer(sendAmount);
    }

    function getSendAmount() public view returns (uint256) {
        return sendAmount;
    }

    function killMe() public returns (bool) {
        require(msg.sender == owner);
        selfdestruct(owner);
        return true;
    }
    function() external payable {}
}
