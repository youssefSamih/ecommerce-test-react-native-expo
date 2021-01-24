const initialState = {
  places: [],
};

const places = (state = initialState, action: { type: any; place: any }) => {
  switch (action.type) {
    case "@places/SET_PLACE":
      return {
        ...state,
        places: [...state.places, action.place],
      };
    default:
      return state;
  }
};

export default places;
