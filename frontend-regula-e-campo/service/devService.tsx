import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://localhost:3001",
});

export class DeveloperServices {
  logDev = async () => {
    try {
      const response = await axiosInstance.post("/public/Dev");
      return response.data;
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      throw error;
    }
  };
}
