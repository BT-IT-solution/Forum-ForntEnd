import axios from "axios";

const Axios = () => {
  return axios.create({
    baseURL: "http://localhost:8000/",
  });
};

const api = Axios();
api.get("/users")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error making the request:", error);
  });
 export default Axios; 