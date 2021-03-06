"use strict";
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

//Has Location URL
Router.run(routes, function(Handler){
    React.render(<Handler/>, document.getElementById('app'));
});
//History Location URL
// Router.run(routes, Router.HistoryLocation, function(Handler){
//     React.render(<Handler/>, document.getElementById('app'));
// });
