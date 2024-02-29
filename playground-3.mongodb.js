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
    userRole: 'oscpadmin',
  },
  {
    username: 'oscpcmo',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userRole: 'oscpadmin',
  },
  {
    username: 'oscpzoning',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userRole: 'oscpadmin',
  },
  {
    username: 'oscpbfp',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userRole: 'oscbfp',
  },
  {
    username: 'oscpassessor',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userRole: 'oscpassessor',
  },
  {
    username: 'oscplng',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userRole: 'oscplindandgrade',
  },
  {
    username: 'oscpstructural',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userRole: 'oscpstructural',
  },
  {
    username: 'oscparchitectural',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userRole: 'oscparchitectural',
  },
  {
    username: 'oscpelectrical',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userRole: 'oscpelectrical',
  },
  {
    username: 'oscpsanitary',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userRole: 'oscpsanitary',
  },
  {
    username: 'oscpmechanical',
    password: '$2a$08$8g/.DFmReWOtKxE0b4OvneXn5PXttd94GjtS7nJCRl7M4QeNZQoEe',
    userRole: 'oscpmechanical',
  }
]);
