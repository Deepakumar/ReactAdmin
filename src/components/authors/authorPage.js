"use strict";

var React = require('react');
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorAction');
var AuthorList = require('../authors/authorList');
var Router = require('react-router');
var Link = Router.Link;

var Authors = React.createClass({
    getInitialState: function() {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },
    render: function() {
        var createAuthorRow = function(author) {
            return (
               <tr key={author.id} >
                    <td><a href={"/#author" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
               </tr>
            );
        };
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors}/>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
            </div>
        );
    }
});

module.exports = Authors;