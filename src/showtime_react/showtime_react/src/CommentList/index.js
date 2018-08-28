import React, { Component } from 'react'
import Comment from '../Comment';



class CommentList extends Component {
   render() {
     return (
       <div className="commentList">
       <p>Yeahhhh I am a CommentList.</p>
         <Comment author="Kevin Kim">Nice, Comment Box</Comment>
        <Comment author="Kevin Yim">Sometimes I talk to myself</Comment>
       </div>
     );
   }


}




export default CommentList;
