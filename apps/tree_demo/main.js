// ==========================================================================
// Project:   TreeDemo
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals TreeDemo: false, sc_require: false */

sc_require('controllers/my_tree_con');
sc_require('models/node_model');

TreeDemo.main = function main() {
  TreeDemo.getPath('mainPage.mainPane').append() ;

  // query the nodes that have no parent
  var q = TreeDemo.store.find(SC.Query.local(TreeDemo.Node, 'myRoot = null'));

  // we need to create a root object (unless your model defines one)
  // also, you'll want your root node to be expanded
  TreeDemo.myTreeController.set('content', SC.Object.create({
    treeItemIsExpanded: YES,
    branches: q
  }));

} ;

function main() { TreeDemo.main(); }
