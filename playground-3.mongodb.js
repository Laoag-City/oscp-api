/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
// all password is hahahahahahaha
use('oscp');

// Create a new document in the collection.
db.getCollection('users').insertMany([
  {
    username: 'kechie',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userrole: 'oscpadmin',
  },
  {
    username: 'oscpcmo',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userrole: 'oscpcmo',
  },
  {
    username: 'oscpzoning',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userrole: 'oscpadmin',
  },
  {
    username: 'oscpbfp',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userrole: 'oscbfp',
  },
  {
    username: 'oscpassessor',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userrole: 'oscpassessor',
  },
  {
    username: 'oscplng',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userrole: 'oscplindandgrade',
  },
  {
    username: 'oscpstructural',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userrole: 'oscpstructural',
  },
  {
    username: 'oscparchitectural',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userrole: 'oscparchitectural',
  },
  {
    username: 'oscpelectrical',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userrole: 'oscpelectrical',
  },
  {
    username: 'oscpsanitary',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userrole: 'oscpsanitary',
  },
  {
    username: 'oscpmechanical',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userrole: 'oscpmechanical',
  }
]);
