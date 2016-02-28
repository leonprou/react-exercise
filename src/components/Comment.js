import React, {PropTypes} from 'react';
import gravatar from 'gravatar';
import _ from 'lodash';

const Comment = ({id, message, email}) => {
  let styles = _.cloneDeep(Comment.styles);

  return (<li style={styles.comment} className="list-group-item">
    <img src={gravatar.url(email, {s : '50'})}/>
    <label>{email}</label>
    <br/>
    <p3 style={styles.message}>{message}</p3>
  </li>);
};

Comment.styles = {
  message: {
    color: 'grey'
  },
  comment: {
    // background: 'blue',
    padding: '2%',
    // width: '100%',
    margin: '1%'
  }
};

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Comment;
