// ==========================================================================
// Project:   TreeDemo
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals TreeDemo */

TreeDemo = SC.Application.create(
  /** @scope TreeDemo.prototype */ {

  NAMESPACE: 'TreeDemo',
  VERSION: '0.1.0',
  store: SC.Store.create().from(SC.Record.fixtures)
}) ;
