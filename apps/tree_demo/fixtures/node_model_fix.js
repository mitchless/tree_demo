sc_require('models/node_model');

TreeDemo.Node.FIXTURES = [
  {
    guid: 1,
    label: '1',
    myRoot: null,
    branches: [2, 3, 4]
  },
  {
    guid: 2,
    label: '2',
    myRoot: 1,
    branches: []
  },
  {
    guid: 3,
    label: '3',
    myRoot: 1,
    branches: []
  },

  {
    guid: 4,
    label: '4',
    myRoot: 1,
    branches: []
  },
];