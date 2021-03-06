/* jshint esversion: 6 */
// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}

// remove comment
export function removeComment(postId, commentIndex) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    commentIndex
  };
}
