import React, {PropTypes} from 'react';
import Comment from '../components/Comment';
import _ from 'lodash';

const CommentList = ({comments}) => {

  return (<ul className="list-group">
    {comments.map(comment => (
      <Comment key={comment.id} {...comment}/>
    ))}
  </ul>);
};


CommentList.propTypes = {
  comments : PropTypes.array
};

CommentList.defaultProps = {
  comments : []
};

export default CommentList;
