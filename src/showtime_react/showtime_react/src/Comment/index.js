import React, { Component } from 'react';
import CommentList from '../CommentList';



class Comment extends Component {
  render() {
  return (
    
    <div className="comment">
    <h2 className = "commentAuthor">
      {this.props.author}</h2>
    <h2>{this.props.children}</h2>
    </div>
  );
}
}

export default Comment;
