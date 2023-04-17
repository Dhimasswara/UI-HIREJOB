import axios from "axios";
import Swal from "sweetalert2";

// get All Recipe
export const getPortfolioByUser = (setPortfolio, id) => async (dispatch) => {
  try {
    axios
      .get(`${process.env.API_BACKEND}portfolio/worker/${id}`)
      .then((response) => {
        setPortfolio(response.data.data);
      });
    dispatch({ type: "GET_PORTFOLIO_BY_USER", payload: "success" });
  } catch (error) {
    Swal.fire({
    //   text: `${error.response.data.message}`,
      icon: "warning",
    });
  }
};

export const createPortfolio =(portfolio, id) => async (dispatch) => {
  try {

    const token = localStorage.getItem("token");
    const formData = new FormData();
    for (let attr in portfolio) {
      formData.append(attr, portfolio[attr]);
    }

    axios.post(`${process.env.API_BACKEND}portfolio/addportfo/${id}`, formData,
    {
      headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    }},
    
    )
      .then((res) => {
        console.log(res.data.data);
        Swal.fire({
          title: "Skill Added",
          text: `New portfolio have been added`,
          icon: "success",
        });
      });
    dispatch({ type: "CREATE_PORTFOLIO", payload: "Portfolio Created" });
  } catch (error) {
    Swal.fire({
      text: 'ERROR 505',
      icon: "warning",
    });
  }
};