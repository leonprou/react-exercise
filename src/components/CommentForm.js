import React, {PropTypes} from 'react';

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

  return (<form>
    <input
      placeholder="Email"
      onChange={onEmailChange}
      type="text"/><br/>
    <br/>
    <textarea
      placeholder="Message"
      onChange={onMessageChange}
      type="text"/>
    <button onClick={onSubmit}>Submit</button>
  </form>)
};

CommentForm.propTypes = {
  submitComment : PropTypes.func.isRequired
};

export default CommentForm;
