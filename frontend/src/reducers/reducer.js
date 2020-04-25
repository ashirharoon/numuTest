const iState = {
  users: [],
  userHobbies: [],
};

const reducer = (state = iState, action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return{
        ...state,
        users: action.payload
      }
    break;
    case "GET_USER_HOBBIES":
      return {
        ...state,
        userHobbies: action.payload=="no_rec"?[]:action.payload
      };
    break;
    default:
      return state;
  }

};
export default reducer;
