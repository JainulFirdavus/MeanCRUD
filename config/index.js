'use strict';

module.exports = {
  // MongoDB connection options
  port: 3000,
  host: 3000,
  mongo: {
    url: 'mongodb://localhost:27017/',
    MongoStore: "mongodb://localhost:27017/",
    name: "crud_operations"
  },
  seedDB: true
};