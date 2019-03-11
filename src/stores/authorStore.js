"use strict";
var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var  CHANGE_EVENT = 'change';

var AuthorStore = assign({},EventEmitter.prototype, {
    addChangeListner: function(callback){
        this.on(CHANGE_EVENT,callback);
    },
    removeChangeListner: function(callback){
        this.removeListner(CHANGE_EVENT,callback);
    },
    emitChange: function(callback){
        this.emit(CHANGE_EVENT);
    }
});

Dispatcher.register(function(action){
    switch(action.ActionTypes) {

    }
});

module.exports = AuthorStore;