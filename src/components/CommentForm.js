import React, {PropTypes} from 'react';
import _ from 'lodash';

const CommentForm = (props) => {
  const onSubmit = e => {
    e.preventDefault();
    props.submitComment(Object.assign({}, props.comment));
  };

  const onEmailChange = e => {
      Object.assign(props.comment, {email: e.target.value});
  }

  const onMessageChange = e => {
      Object.assign(props.comment, {message: e.target.value});
  }

  let styles = _.cloneDeep(CommentForm.styles);

  return (<form style={styles.commentForm}>
    <div className="form-group">
      <label className="sr-only">Email address</label>
      <input
        placeholder="Email"
        onChange={onEmailChange}
        type="text"
        className="form-control"/>
    </div>
    <div className="form-group">
      <label className="sr-only">Email address</label>
      <textarea
        placeholder="Message"
        onChange={onMessageChange}
        type="text"
        className="form-control"/>
    </div>
    <div>
    <button
      onClick={onSubmit}
      className="btn btn-primary">SUBMIT</button>
      </div>
  </form>);
};

CommentForm.styles = {
  commentForm: {
    background: '#eee',
    padding: '2%',
    margin: '1%'
  },
  submitButton: {
    float: 'right'
  }
};

CommentForm.propTypes = {
  submitComment : PropTypes.func.isRequired
};

export default CommentForm;
