
const getComments = () => [
  {
    id: 1,
    message: 'cool comment about this app',
    email: 'elik@bigpanda.io'
  },
  {
    id: 2,
    message: 'another cool comment',
    email: 'shai@bigpanda.io'
  }
];

const generateCommentId = (comments) => comments.length + 1;

export {getComments, generateCommentId};
