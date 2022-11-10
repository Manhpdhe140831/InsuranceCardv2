import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";
const API_USER = "http://localhost:8080/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "customer", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "staff", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const getAllUser = () => {
  return axios.get(API_USER + "user", { headers: authHeader() });
}

const updateUser = (user) => {
  return axios.put(API_USER + "user/update", user, { headers: authHeader() });
}

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getAllUser,
  updateUser
};

export default UserService;
