const initialState = {
    skills: [],
    // detailRecipe: [],
    // comment: [],
  };
  
  export const skillsReducer = (state = initialState, action) => {
    if (action.type === "GET_SKILL_BY_USER") {
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
    } else if (action.type === "CREATE_SKILL") {
      return state;
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
  