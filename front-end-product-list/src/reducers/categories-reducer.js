const categoriesReducer = function (state = [], action) {
  switch (action.type) {
    case 'FETCH_CATEGORIES':
      return action.payload;
    default:
      return state;
  }
};

export default categoriesReducer;