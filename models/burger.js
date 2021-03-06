// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");



var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    selectDevoured: function(cb) {
      orm.selectDevoured("burgers", function(res) {
        cb(res);
      });
    },
    selectNotDevoured: function(cb) {
      orm.selectNotDevoured("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(name, cb) {
      orm.insertOne(name, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;