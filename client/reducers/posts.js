/* jshint esversion: 6 */

// Reducer needs:
// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
    console.log("Incrementing Likes!");
    const index = action.index
    return [
      ...state.slice(0, index), //up to the photo we want to update
      {...state[index], likes: state[index].likes + 1},
      ...state.slice(index + 1), //after the photo we want to update
    ];
  default:
    return state;
  }
}

export default posts;
