const {DoublyLinkedList} = require('./doubly-linked-list'); 
var list = new DoublyLinkedList(),
node = null;
console.log("-----Start adding node 1-6-----");
list.add('Node Number 1');
list.add('Node Number 2');
list.add('Node Number 3');
list.add('Node Number 4');
list.add('Node Number 5');
list.add('Node Number 6');
console.log("-----ended-----");

var findNodeByIndex = list.findNodeByIndex(2);
console.log("-----find node by index 2-----");
console.log(findNodeByIndex);

var findNodeByName = list.findNodeByName('Node Number 3');
console.log("-----find node by name Node Number 3-----");
console.log(findNodeByName);

var removeName =list.removeByIndex(5);
console.log("-----Remove last node-----");
console.log(removeName);

console.log("-----Show all list-----");
console.log(list);
