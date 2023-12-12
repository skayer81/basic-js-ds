const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

// root— вернуть корневой узел дерева
// add(data)— добавить узел с dataв дерево
// has(data)— возвращает true, если узел с указанным dataсуществует в дереве и falseв противном случае
// find(data)— возвращает узелdata , если узел существует в dataдереве и nullв противном случае
// remove(data)— удаляет узел с dataиз дерева, если узел с dataсуществует
// min— возвращает минимальное значение, хранящееся в дереве (или nullесли дерево не имеет узлов )
// max— возвращает максимальное значение , хранящееся в дереве (или nullесли дерево не имеет узлов )
class BinarySearchTree {
  constructor(){
    this._root = null
  }

  

  root() {
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this._root;
  }
  initRoot(){
    this._root.value = data;
    this._root.rigth = null;
    this._root.left = null;
  }

  _searchElem(data, elem){
    if (elem.value > data){
      if (!elem.rigth) return elem;
      this._searchElem(data, elem.rigth);
    }
    else{
      if (!elem.left) return elem;
      this._searchElem(data, elem.left);
    }
  }

  add( data ) {
    if (this._root = null) this.initRoot();
    else  this._searchElem(data, this._root);
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};