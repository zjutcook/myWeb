/**
 * commentBox 评论框
 * createClass/createElement
 */

/*** HTML 组件模块 ***/
var CommentBox = React.createClass({
    render: function() {
        return (
            <div className = "commentBox">
                <h1> comments </h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});

var Comment = React.createClass({
    render: function() {
        return (
            <div className = "comment">
                <h2 className = "commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        return (
            <div className = "commentList">
                <Comment author = "Andrew">This is a one commment.</Comment>
                <Comment author = "Jordan Weke">This is *another* commment.</Comment>
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className = "commentForm">
                Hello, world!I am a CommentForm
            </div>
        );
    }
});

/*** HTML 模块渲染 ***/
ReactDOM.render( <CommentBox /> ,
    document.getElementById('content')
);
