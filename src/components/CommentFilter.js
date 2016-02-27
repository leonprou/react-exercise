import React, {PropTypes} from 'react';

const CommentFilter = (props) => {
  const onFilterChange = e => {
      e.preventDefault();
      Object.assign(props.filter, {text: e.target.value});
      props.filterComments(props.filter.text);
  };

  return <input
    placeholder="Filter"
    onChange={onFilterChange}
    type="text"/>
};

CommentFilter.propTypes = {
  filterComments: PropTypes.func.isRequired
};

export default CommentFilter;
