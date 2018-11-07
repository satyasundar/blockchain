pragma solidity ^0.4.17;

contract Test {
    uint[] public myArray;
    
    function Test() public {
        myArray.push(100);
        myArray.push(21);
        myArray.push(31);
    }

    function getMyArray() public view returns (uint[]) {
        return myArray;
    }

    function getArrayLength() public view returns (uint) {
        return myArray.length;
    }

    function getFirstElement() public view returns (uint) {
        return myArray[0];
    }
}
