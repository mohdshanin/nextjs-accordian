const initialState = {
  spaceData: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        spaceData: action.payload,
      };
    default:
      return state;
  }
};
