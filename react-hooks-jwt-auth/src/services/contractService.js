import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/";

const getContractByAdmin = () => {
    return axios.get(API_URL + "contract", { headers: authHeader() });
};
const ContractService = {
    getContractByAdmin
};

export default ContractService;