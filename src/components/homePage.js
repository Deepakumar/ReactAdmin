"use strict";

var React = require("react");

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>Plurslight Administration</h1>
                <p>React, React Router, and Flex for ultra-responsive web apps</p>
            </div>
        );
    }
});

module.exports = Home;