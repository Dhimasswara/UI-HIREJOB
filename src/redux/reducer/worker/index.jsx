const initialState = {
    worker: [],
    detailWorker: [],
    // detailRecipe: [],
    // comment: [],
  };
  
  export const workerReducer = (state = initialState, action) => {
    if (action.type === "GET_ALL_WORKERS") {
      return {
        ...state,
        worker: action.payload,
        isLoading: false,
      }
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
    } else if (action.type === "UPDATE_WORKER") {
      return state;
    } else if (action.type === "GET_DETAIL_WORKER") {
      return {
        ...state,
        detailWorker: action.payload,
        isLoading: false,
      };
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
  