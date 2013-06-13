// your Tree nodes all must be of the same type. This may be obvious to you but it wasn't to me :-p
TreeDemo.Node = SC.Record.extend({
  label: SC.Record.attr(String),
  myRoot: SC.Record.toOne('TreeDemo.Node', {
    inverse: 'branches'
  }),
  branches: SC.Record.toMany('TreeDemo.Node', {
    inverse: 'myRoot'
  })
});