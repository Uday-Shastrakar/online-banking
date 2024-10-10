import { CustomerRegisterForm } from "../Types";
import api from "./api";

// API call for customer registration
export const register = async (registerForm: CustomerRegisterForm): Promise<CustomerRegisterForm> => {
    const response = await api.post<CustomerRegisterForm>('/users/customer', registerForm);
    return response.data;
};