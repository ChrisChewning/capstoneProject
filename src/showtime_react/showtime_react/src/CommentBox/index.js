import React, {Component} from 'react';
import CommentList from '../CommentList';
import CommentForm from '../CommentForm';



//
class CommentBox extends Component {
   render() {
     return (
       <div className="commentsBox">
         <h1>This is comment box</h1>
         < CommentForm />
         {/* < CommentList /> */}
       </div>
     );
   }
}
//
//
//
export default CommentBox;
