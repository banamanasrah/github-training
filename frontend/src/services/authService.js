//communication with your Spring Boot API.
//remember bnbun em al bun that :services/
/*Handles communication with external services, such as sending API requests to my backend.*/


import axios from "axios";


const API_URL = "http://localhost:8080/api/v1/auth";

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

export const login = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
};

//remember bana that we most export the functions so i can use it in other folders that will need them.