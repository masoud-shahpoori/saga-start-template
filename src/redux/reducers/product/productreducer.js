const initialState = {
  product: [],
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HI":
      return {
        ...state,
        product: [{ hi: "q" }],
        // loading:true,
      };

    default:
      return state;
  }
};
export default productReducer;
