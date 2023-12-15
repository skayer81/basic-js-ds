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
    this._root = null;
    this._curent = null;
  }

  

  root() {
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this._root;
  }
  initRoot(data){
    console.log(data, 'init')
    this._root = this._newElem(data);
    // this._root.rigth = null;
    // this._root.left = null;
  }

  _searchElem(data){
    if (this._curent.data < data){
      if (!this._curent.rigth) {
        this._curent.rigth = this._newElem(data);
        return
      }
      this._curent = this._curent.rigth;
    //  this._searchElem(data)
    }
    else{
      if (!this._curent.left) {
        this._curent.left = this._newElem(data);
        return
      }
      this._curent = this._curent.left;
    }
    this._searchElem(data)
  }

  _newElem(data){
    return {data:data, left:null, rigth: null};
  }

  add( data ) {
    console.log(data,'add')
    if (this._root == null) this.initRoot(data)
    else  {
      this._curent = this._root;
      this._searchElem(data);
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    console.log(this.root())
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  _find(data){
    //console.debug(data, this._curent)
    if (data === this._curent.data) {
     // console.debug('return', this._curent)
      return this._curent;}
    if (data > this._curent.data){
      if (!this._curent.rigth) {
        //this._curent.rigth = this._newElem(data);
       // console.debug('return', null)
        return null
      }
      this._curent = this._curent.rigth;
    //  this.find(data)
    }
    else{
      if (!this._curent.left) {
       // this._curent.left = this._newElem(data);
      // console.debug('return', null)
        return null
      }
      this._curent = this._curent.left;
    }
    return this._find(data)
  }

  find( data ) {
    this._curent = this._root;
    let result = this._find(data);
   // console.debug(data, result, this.root())
    return  result
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