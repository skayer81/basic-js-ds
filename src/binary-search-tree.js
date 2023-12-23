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
    if (this._curent.data === data) //{
      return// this._curent;}
    if (this._curent.data < data){
      if (!this._curent.rigth) {
        this._curentSide = 'rigth'// = this._newElem(data);
        return
      }
      this._parentRigth = true;
      this._parent = this._curent;
      this._curent = this._curent.rigth;
    //  this._searchElem(data)
    }
    else {
      if (!this._curent.left) {
        this._curentSide = 'left'// = this._newElem(data);
        return
      }
      this._parentRigth = false;
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
    console.log(result,'узел для удаления')
    if (!result.left && !result.rigth){
      if(this._parentRigth) this._parent.rigth = null
      else this._parent.left = null
    }
    if (result.left && !result.rigth){
      if(this._parentRigth) this._parent.rigth = result.left
      else this._parent.left = result.left
    }
    if (!result.left && result.rigth){
      if(this._parentRigth) this._parent.rigth = result.rigth
      else this._parent.left = result.rigth
    }
    if (result.left && result.rigth){
     // console.debug('для удаления', result)
     // console.debug('min', this._findMin(result.rigth));
      let result = this._curent;
      this._curent = result.rigth;
      this._searchElem(-Infinity);
      let curentMin = this._curent
      
      console.log(curentMin, 'минималка')
     //let result = this._find(data);
      result.data = curentMin.data;
    // this._find(data, curentMin);
      this._remove(curentMin);
    }
  }

  remove(data) {
    this._curent = this._root;
   // let result = 
    this._searchElem(data);
    if (this._curent.data === data) return this._remove(this._curent);//this._curent;
//
    // console.log
    // if (!result) return;
   // console.debug('remove',result)
    

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


const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
//      console.debug('до удаления 14',tree)
//tree.remove(14);
   //   console.debug('после удаления 14',tree)
// tree.remove(8);
 tree.remove(9);
// assert.strictEqual(tree.has(14), false);
// assert.strictEqual(tree.has(8), false);
// assert.strictEqual(tree.has(9), false);
// assert.strictEqual(tree.has(2), true);
// assert.strictEqual(tree.has(6), true);
// assert.strictEqual(tree.has(128), true);
// assert.strictEqual(tree.has(31), true);
// assert.strictEqual(tree.has(54), true);
// assert.strictEqual(tree.has(1), true);
