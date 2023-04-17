import axios from "axios";
import Swal from "sweetalert2";

// get All Recipe
export const getExperienceByUser = (setExperience, id) => async (dispatch) => {
  try {
    axios
      .get(`${process.env.API_BACKEND}experience/worker/${id}`)
      .then((response) => {
        setExperience(response.data.data);
      });
    dispatch({ type: "GET_EXPERIENCE_BY_USER", payload: "success" });
  } catch (error) {
    Swal.fire({
    //   text: `${error.response.data.message}`,
      icon: "warning",
    });
  }
};