import React, {PropTypes} from 'react';
import _ from 'lodash';

const CommentFilter = (props) => {
  const onFilterChange = e => {
      e.preventDefault();
      Object.assign(props.filter, {text: e.target.value});
      props.filterComments(props.filter.text);
  };

  let styles = _.cloneDeep(CommentFilter.styles);

  return <input style={styles.commentFilter}
    placeholder="Filter"
    onChange={onFilterChange}
    type="text"/>
};

CommentFilter.styles = {
  commentFilter: {
    width: '98%',
    padding: '2%',
    margin: '1%'
  }
};

CommentFilter.propTypes = {
  filterComments: PropTypes.func.isRequired
};

export default CommentFilter;
