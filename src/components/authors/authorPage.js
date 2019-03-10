"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('../authors/authorList');
var Router = require('react-router');
var Link = Router.Link;

var Authors = React.createClass({
    getInitialState: function() {
        return {
            authors: []
        };
    },

    componentDidMount: function() {
        if(this.isMounted()){
            this.setState({authors: AuthorApi.getAllAuthors()});
        }
        this.setState({authors: AuthorApi.getAllAuthors()});
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