import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import CommentFilter from '../components/CommentFilter';

class App extends Component {

  constructor(props) {
    super(props);
    let comments = [
      {
        id: 1,
        message: 'cool comment about this page',
        email: 'elik@bigpanda.io'
      },
      {
        id: 2,
        message: 'another cool comment',
        email: 'shai@bigpanda.io'
      }
    ];
    let commentsToShow = comments.slice();
    this.state = {
      comments,
      commentsToShow
    };
    this.nextId = this.state.comments.length + 1;
    this.comment = {
      message: 'made my comment',
      email: 'leonprou@gmail.com'
    };
    this.filter = {

    };
  }

  generateId() {
    return this.nextId++;
  }

  submitComment(comment) {
    comment.id = this.generateId();
    this.state.comments.push(comment);
    this.setState({comments: this.state.comments});
    this.filterComments(this.filter.text);
  }

  filterComments(filterText) {
    let commentsToShow;
    if (filterText == undefined) {
      commentsToShow = this.state.comments.slice();
    } else {
      commentsToShow = this.state.comments.filter(comment => {
        if (comment.email.indexOf(filterText) != -1 ||
          comment.message.indexOf(filterText) != -1) {
            return true;
          }
      });
    }
    this.setState({commentsToShow});
  }

  render() {
    return (
      <div>
        <CommentForm comment={this.comment} submitComment={this.submitComment.bind(this)}/>
        <CommentFilter filter={this.filter} filterComments={this.filterComments.bind(this)}/>
        <CommentList comments={this.state.commentsToShow}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
