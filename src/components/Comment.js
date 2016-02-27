import React, {PropTypes} from 'react';
import gravatar from 'gravatar';

const Comment = ({id, message, email}) => (
  <ul>
    <p3>{message} by {email}</p3>
    <img src={gravatar.url(email)}/>
  </ul>
);

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Comment;
