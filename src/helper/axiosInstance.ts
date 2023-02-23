import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://karamoozi.kbapis.ir/api/admin/",
});

export default axiosInstance;
