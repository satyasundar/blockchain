pragma solidity ^0.5.0;

contract SimpleStore {
    struct Item {
        uint price;
        uint units;
    }
    
    Item[] public items;
    
    function newItem1(uint _price,uint _units) public {
        Item memory item = Item(_price,_units);
        items.push(item);
    }
    
    function getUsingStorage1(uint _itemIndex1) public view returns(uint){
        Item storage item = items[_itemIndex1];
        return item.price;
    }
    function getUsingMemory(uint _itemIndex) public view returns(uint) {
        Item memory item = items[_itemIndex];
        return item.price;
    }
    function addItemUsingStorage(uint _itemIndex, uint _price) public {
        Item storage item = items[_itemIndex];
        item.price += _price;
    }
    function addItemUsingMemory(uint _itemIndex, uint _price) public {
        Item memory item = items[_itemIndex];
        item.price += _price;
    }
}
