import React, {PropTypes} from 'react';
import Comment from '../components/Comment';

const CommentList = ({comments}) => (
  <ul>
    {comments.map(comment => (
      <Comment key={comment.id} {...comment}/>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments : PropTypes.array
};

CommentList.defaultProps = {
  comments : []
};

export default CommentList;
