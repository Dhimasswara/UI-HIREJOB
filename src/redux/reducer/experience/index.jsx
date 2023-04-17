const initialState = {
    experience: [],
    // detailRecipe: [],
    // comment: [],
  };
  
  export const experienceReducer = (state = initialState, action) => {
    if (action.type === "GET_EXPERIENCE_BY_USER") {
      return {
        ...state,
        skills: action.payload,
        isLoading: false,
      };
    // } else if (action.type === "getAllRecipePopular") {
    //   return {
    //     ...state,
    //     recipe: action.payload,
    //     isLoading: false,
    //   };
    // } else if (action.type === "createRecipe") {
    //   return state;
    // } else if (action.type === "deleteRecipe") {
    //   return state;
    // } else if (action.type === "deleteSaved") {
    //   return state;
    // } else if (action.type === "deleteLiked") {
    //   return state;
    // } else if (action.type === "updateRecipe") {
    //   return state;
    // } else if (action.type === "getDetailRecipe") {
    //   return {
    //     ...state,
    //     detailRecipe: action.payload,
    //     isLoading: false,
    //   };
    // } else if (action.type === "getComment") {
    //   return {
    //     ...state,
    //     comment: action.payload,
    //     isLoading: false,
    //   };
    } else {
      return state;
    }
  };
  