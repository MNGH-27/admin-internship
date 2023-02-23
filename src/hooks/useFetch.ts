import axiosInstance from "../helper/axiosInstance";
import { toast } from "react-toastify";
const AxiosInstance = (route = null) => {
  axiosInstance.interceptors.request.use(
    function (config) {
      return config;
    },
    function (err) {
      return err;
    }
  );
  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      if (!error.response) {
        toast.warn("Network Error", {
          toastId: "id-network-error",
        });
      } else if (error.response.status === 500) {
        toast.warn("500 Internet server Error", {
          toastId: "id-code-500",
        });

        console.log("process : ", window.location.href);
      }
      //check status code with backend to handler it
      else if (error.response.status === 400) {
        toast.warn(error.response.message, {
          toastId: "id-code-400",
        });
        return error.response;
      }
      //check status code with backend if user has token
      else if (error.response.status === 401) {
        return error.response;
      }

      return error.response;
    }
  );
  return axiosInstance;
};

export default AxiosInstance;
