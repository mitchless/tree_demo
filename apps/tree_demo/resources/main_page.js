// ==========================================================================
// Project:   TreeDemo - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals TreeDemo */

TreeDemo.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'treeListView'.w(),

    // Here we'll just use the stock list view and list item view. We need to get the arranged
    // objects from the tree and tell him where the content is stored
    treeListView: SC.ListView.extend({
      layout: { centerX: 0, centerY: 0, width: 300, height: 600 },
      contentBinding: SC.Binding.oneWay('TreeDemo.myTreeController.arrangedObjects'),
      contentValueKey: 'label'
    })
  })

});
