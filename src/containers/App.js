import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import CommentFilter from '../components/CommentFilter';
import {getComments, generateCommentId} from '../api/CommentsApi';
import _ from 'lodash';

require('expose?$!expose?jQuery!jquery');
require("bootstrap-webpack");

class App extends Component {

  constructor(props) {
    super(props);
    let comments = getComments();

    this.state = {
      comments,
      commentsToShow: comments.slice()
    };
    this.comment = {};
    this.filter = {};
  }

  submitComment(comment) {
    comment.id = generateCommentId(this.state.comments);
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
    let styles = _.cloneDeep(this.constructor.styles);

    return (
      <div style={styles.appContainer}>
        <div style={styles.appItem}>
          <CommentForm comment={this.comment} submitComment={this.submitComment.bind(this)}/>
          <CommentFilter filter={this.filter} filterComments={this.filterComments.bind(this)}/>
          <CommentList comments={this.state.commentsToShow}/>
        </div>
      </div>
    );
  }
}

App.styles = {
  appContainer: {
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center'
  },
  appItem: {
    width: '40%'
    // background: 'green'
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
