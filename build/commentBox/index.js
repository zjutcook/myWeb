/**
 * commentBox 评论框
 * createClass/createElement
 */

/*** HTML 组件模块 ***/
var CommentBox = React.createClass({displayName: "CommentBox",
    render: function() {
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, " comments "), 
                React.createElement(CommentList, null), 
                React.createElement(CommentForm, null)
            )
        );
    }
});

var Comment = React.createClass({displayName: "Comment",
    render: function() {
        return (
            React.createElement("div", {className: "comment"}, 
                React.createElement("h2", {className: "commentAuthor"}, 
                    this.props.author
                ), 
                this.props.children
            )
        );
    }
});

var CommentList = React.createClass({displayName: "CommentList",
    render: function() {
        return (
            React.createElement("div", {className: "commentList"}, 
                React.createElement(Comment, {author: "Andrew"}, "This is a one commment."), 
                React.createElement(Comment, {author: "Jordan Weke"}, "This is *another* commment.")
            )
        );
    }
});

var CommentForm = React.createClass({displayName: "CommentForm",
    render: function() {
        return (
            React.createElement("div", {className: "commentForm"}, 
                "Hello, world!I am a CommentForm"
            )
        );
    }
});

/*** HTML 模块渲染 ***/
ReactDOM.render( React.createElement(CommentBox, null) ,
    document.getElementById('content')
);
