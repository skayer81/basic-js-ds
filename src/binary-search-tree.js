const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this._root = null;
    this._curent = null;
  }

  root() {
    return this._root;
  }

  _initRoot(data){
    this._root = this._newElem(data);
  }

  _newElem(data){
    return {data:data, left:null, rigth: null};
  }

  _searchElem(data){
    if (this._curent.data === data) return
    if (this._curent.data < data){
      if (!this._curent.rigth) {
    //    this._parentRigth = false;
        this._curentSide = 'rigth';
        return
      }
//this._parentRigth = true;
      this._parent = this._curent;
      this._curent = this._curent.rigth;
    }
    else {
      if (!this._curent.left) {
        this._curentSide = 'left'
    //   this._parentRigth = true;
        return
      }
   //   this._parentRigth = false;
      this._parent = this._curent;
      this._curent = this._curent.left;
    }
    this._searchElem(data)
  }

  add(data) {
    if (this._root == null) this._initRoot(data)
    else  {
      this._curent = this._root;
      this._searchElem(data);
      this._curent[this._curentSide] = this._newElem(data);
    }
  }

  has( data ) {
    return Boolean(this.find(data))
  }

  find( data ) {
    this._curent = this._root;
    this._searchElem(data);
    if (this._curent.data === data) return this._curent;
    return null
  }

  _remove( result){
    if (!result.left && !result.rigth){
    if(this._parent.data <= result.data) this._parent.rigth = null
      else this._parent.left = null
    }
    if (result.left && !result.rigth){
      if (result === this._root) this._root = this._root.left
      else if(this._parent.data <= result.data) this._parent.rigth = result.left
        else this._parent.left = result.left
    }
    if (!result.left && result.rigth){
      if (result === this._root) this._root = this._root.rigth
      else if(this._parent.data <= result.data) this._parent.rigth = result.rigth
        else this._parent.left = result.rigth
    }
    if (result.left && result.rigth){
      let result = this._curent;
      this._parent = result;
      this._curent = result.rigth;
      this._searchElem(-Infinity);
      let curentMin = this._curent
      result.data = curentMin.data;
      this._remove(curentMin, );
    }
  }

  remove(data) {
    this._curent = this._root;
    this._searchElem(data);
    if (this._curent.data === data) return this._remove(this._curent);
  }

  min() {
    this._curent = this._root;
    this._searchElem(-Infinity);
    return this._curent.data;
  }

  max() {
    this._curent = this._root;
    this._searchElem(Infinity);
    return this._curent.data;
  }
}

module.exports = {
  BinarySearchTree
};

