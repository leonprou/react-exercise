import React, {Component, PropTypes} from 'react';
import _ from 'lodash';

class CommentForm extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  validateForm() {
    if (this.props.comment.email && this.props.comment.message) {
      this.setState({formIsValid : true});
    } else {
      this.setState({formIsValid : false});
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.submitComment(Object.assign({}, this.props.comment));
  };

  onEmailChange(e) {
      Object.assign(this.props.comment, {email: e.target.value});
      this.validateForm();
  }

  onMessageChange(e) {
      Object.assign(this.props.comment, {message: e.target.value});
      this.validateForm();
  }


  render() {
    let styles = _.cloneDeep(this.constructor.styles);

    let validForm;
    if (this.state.formIsValid) {
      validForm = <div><button
              onClick={this.onSubmit.bind(this)}
              className="btn btn-primary">SUBMIT</button>
            </div>;
    } else {
      validForm = <div><button
              onClick={this.onSubmit.bind(this)}
              className="btn btn-disabled" disabled>SUBMIT</button>
            </div>;
    }

    return (
      <form style={styles.commentForm}>
        <div className="form-group">
          <label className="sr-only">Email address</label>
          <input
            placeholder="Email"
            onChange={this.onEmailChange.bind(this)}
            type="text"
            className="form-control"/>
        </div>
        <div className="form-group">
          <label className="sr-only">Email address</label>
          <textarea
            placeholder="Message"
            onChange={this.onMessageChange.bind(this)}
            type="text"
            className="form-control"/>
        </div>
        {validForm}
      </form>);
  }
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
