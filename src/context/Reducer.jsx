const Reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_START":
        return {
          ...state,
          user: null,
          error: false,
        };
      case "LOGIN_SUCCESS":
        return {
          ...state,
          user: action.payload,
          error: false,
        };
      case "LOGIN_FAILURE":
        return {
          ...state,
          user: null,
          error: true,
        };
        case "UPDATE_START":
          return {
            ...state,
          };
        case "UPDATE_SUCCESS":
          return {
            ...state,
            user: action.payload,
            error: false,
          };
        case "UPDATE_FAILURE":
          return {
            ...state,
            user: state.user,
            error: true,
          };
      case "LOGOUT":
        return {
          ...state,
          user: null,
          error: false,
        };
        case "FETCH_POST":
          return {
            ...state,
            postData: action.payload,
            isFetching: true
          };
          case "FETCH_CAT":
          return {
            ...state,
            categorie: action.payload
          };
          case "ADD_POST":
          return {
            ...state,
            postData: [action.payload, ...state.postData]
          };
          case "FILTER_BY_CAT":
          return {
            ...state,
            filterByCat: action.payload
          };
      default:
        return state;
    }
  };
  
  export default Reducer;