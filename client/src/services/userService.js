import axios from "axios";

const API_URL = "http://localhost:8001";

const getAll = () => {
  let a = axios.get(API_URL + "/user");
  console.log("aaaa$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%", a);
  return axios.get(API_URL + "/user");
};

const get = (id) => {
  return axios.get(API_URL + `/user/${id}`);
};

const update = (id, data) => {
  return axios.put(API_URL + `/user/${id}`, data);
};

const userService = {
  getAll,
  get,
  update,
};

export default userService;
