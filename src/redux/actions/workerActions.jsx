import axios from "axios";
import Swal from "sweetalert2";

// get All Recipe
export const getWorkers = (setWorker, search) => async (dispatch) => {
  try {
    axios
      .get(`${process.env.API_BACKEND}workers/?search=${search ? search : ""}`)
      .then((response) => {
        setWorker(response.data.data);
      });
      dispatch({ type: "GET_ALL_WORKERS", payload: "success" });
    } catch (error) {
    Swal.fire({
      text: `${error.response.data.message}`,
      icon: "warning",
    });
  }
};

// get detail Worker
export const getDetailWorker = (setWorker, id) => async (dispatch) => {
  try {
    if(id){
    axios
      .get(`${process.env.API_BACKEND}workers/${id}`)
      .then((response) => {
        console.log(response);
        setWorker(response?.data?.data?.[0]);
      });
    dispatch({ type: "GET_DETAIL_WORKER", payload: "success" });
  }
  } catch (error) {
    Swal.fire({
      text: error.response.data.data.message,
      icon: "warning",
    });
  }
};

// Update Recipe
export const updateWorker = (worker, id) => async (dispatch) => {
  try {

    const token = localStorage.getItem("token");
    const formData = new FormData();
    for (let attr in worker) {
      formData.append(attr, worker[attr]);
    }

    axios
      .put(`${process.env.API_BACKEND}workers/${id}`, formData, 
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
       })
      .then((res) => {
        Swal.fire({
          title: res.data.message,
          icon: "success",
        });
      });
      dispatch({ type: "UPDATE_WORKER", payload: "Recipe Updated success" });

  }  catch (error) {
      console.log(error);
      Swal.fire({
        // text: error.response.data.message,
        icon: "warning",
      });
    }
  };



// get Recipe Popular
// export const getRecipePopular = (setPopular, counter) => async (dispatch) => {
  //   try {
    //     axios
    //       .get(
//         `${process.env.REACT_APP_BACKEND}/api/v1/recipe?sortby=likes&sort=asc&limit=100`
//       )
//       .then((response) => {
//         setPopular(response.data.data);
//       });
//     dispatch({ type: "getAllRecipePopular", payload: "success" });
//   } catch (error) {
//     Swal.fire({
//       text: `${error.response.data.message}`,
//       icon: "warning",
//     });
//   }
// };

// export const getComment = (setDataComments, id) => async (dispatch) => {
//   try {
//     axios
//       .get(`${process.env.REACT_APP_BACKEND}/api/v1/comment/recipe/${id}`)
//       .then((response) => {
//         setDataComments(response.data.data);
//       });
//     dispatch({ type: "getComment", payload: "success" });
//   } catch (error) {
//     Swal.fire({
//       text: `${error.response.data.message}`,
//       icon: "warning",
//     });
//   }
// };

// // Create Recipe
// export const createRecipe =
//   (insertProduct, imageProduct, videoProduct) => async (dispatch) => {
//     try {
//       const token = localStorage.getItem("token");
//       let inputForm = new FormData();
//       inputForm.append("name_recipe", insertProduct.name_recipe);
//       inputForm.append("ingredients", insertProduct.ingredients);
//       inputForm.append("video", videoProduct);
//       inputForm.append("description", insertProduct.description);
//       inputForm.append("image", imageProduct);
//       axios
//         .post(`${process.env.REACT_APP_BACKEND}/api/v1/recipe/`, inputForm, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((res) => {
//           console.log(res.data);
//           Swal.fire({
//             title: "Product Added",
//             text: `New product have been added`,
//             icon: "success",
//           });
//         });
//       dispatch({ type: "createRecipe", payload: "Recipe Created success" });
//     } catch (error) {
//       Swal.fire({
//         text: error.response.data.message,
//         icon: "warning",
//       });
//     }
//   };


// // Delete Recipe
// export const deleteRecipe = (id) => async (dispatch) => {
//   try {
//     const token = localStorage.getItem("token");
//     axios
//       .delete(`${process.env.REACT_APP_BACKEND}/api/v1/recipe/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         console.log(res.data.data);
//         Swal.fire({
//           title: "Delete Success",
//           text: `Your Recipe Delete Success`,
//           icon: "success",
//         });
//       });
//     dispatch({ type: "deleteRecipe", payload: "Recipe Deleted success" });
//   } catch (error) {
//     Swal.fire({
//       text: error.response.data.message,
//       icon: "warning",
//     });
//   }
// };


// // Delete Saved
// export const deleteSaveds = (id) => async (dispatch) => {
//   try {
//     const token = localStorage.getItem("token");
//     axios
//       .delete(`${process.env.REACT_APP_BACKEND}/api/v1/saved/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         console.log(res.data);
//         Swal.fire({
//           title: "Delete Success",
//           text: `Your Recipe Delete Success`,
//           icon: "success",
//         });
//       });
//     dispatch({ type: "deleteSaved", payload: "Recipe Deleted success" });
//   } catch (error) {
//     Swal.fire({
//       text: error.response.data.message,
//       icon: "warning",
//     });
//   }
// };

// // Delete Liked
// export const deleteLikeds = (id) => async (dispatch) => {
//   try {
//     const token = localStorage.getItem("token");
//     axios
//       .delete(`${process.env.REACT_APP_BACKEND}/api/v1/liked/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         console.log(res.data);
//         Swal.fire({
//           title: "Delete Success",
//           text: `Your Recipe Delete Success`,
//           icon: "success",
//         });
//       });
//     dispatch({ type: "deleteLiked", payload: "Recipe Deleted success" });
//   } catch (error) {
//     Swal.fire({
//       text: error.response.data.message,
//       icon: "warning",
//     });
//   }
// };
