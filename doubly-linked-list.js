function DoublyLinkedList() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }
  DoublyLinkedList.prototype._createNewNode = function (name) {
    var list = this;
    var node = {
      name: name,
      next: null,
      previous: null 
    };
    return node;
  };
  DoublyLinkedList.prototype.add = function (name) {
    var newNode = this._createNewNode(name);
    // check if fist time. then inital head and tail
    if (this._length === 0) {      
      this._head = newNode;
      this._tail = newNode;
    }
    else {     
      this._tail.next = newNode;
      newNode.previous = this._tail;
      this._tail = newNode;
    }  
    this._length++;
    console.log("added node - " + name);
    return newNode;
  };

  DoublyLinkedList.prototype.findNodeByIndex = function (index) {
    if (index >= 0 && index < this._length) {
      var node = this._head;
      while (index--) {
        node = node.next;
      }
      return node;
    }
  };

  DoublyLinkedList.prototype.findNodeByName = function (name) {
    if ( this._length > 0 ) {
      var node = this._head;
      var length = this._length;
      while (length--) {
        if(node.name === name){
          return node;
        }
        else{
          node = node.next;
        }       
      }
      return null;
    }
  };

  DoublyLinkedList.prototype.removeByIndex = function(index) {
    if (index > -1 && index < this._length){

      var nodeCurrent = this._head,
          i = 0;

      // removing first item
      if (index === 0){
          this._head = nodeCurrent.next;
         
          if (!this._head){
              this._tail = null;
          } else {
              this._head.previous = null;
          }

      //removing last item
      } else if (index === this._length -1){
          nodeCurrent = this._tail;
          this._tail = nodeCurrent.previous;
          this._tail.next = null;
      } else {

         
          while(i++ < index){
              nodeCurrent = nodeCurrent.next;
          }          
          nodeCurrent.previous.next = nodeCurrent.next;
      }     
      this._length--;  
      return nodeCurrent.name;            

  } else {
      return null;
  }
  }

  DoublyLinkedList.prototype.head = function () {
    return this._head;
  };
  DoublyLinkedList.prototype.tail = function () {
    return this._tail;
  };
  DoublyLinkedList.prototype.size = function () {
    return this._length;
  };
 
  exports.DoublyLinkedList = DoublyLinkedList;
