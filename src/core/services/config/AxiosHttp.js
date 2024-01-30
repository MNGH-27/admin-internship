import axiosInstance from './axisoInstance'
import toast from 'react-hot-toast'
import { getCookie } from 'cookies-next'

const AxiosFetch = () => {
   axiosInstance.interceptors.request.use(
      function (config) {
         if (getCookie('token')) {
            config.headers.Authorization = `Bearer ${getCookie('token')}`
         } else {
            toast.error('توکن نداری')
         }
         return config
      },
      function (error) {
         return error
      },
   )
   axiosInstance.interceptors.response.use(
      function (response) {
         // Any status code that lie within the range of 2xx cause this function to trigger
         // Do something with response data
         return response
      },
      function (error) {
         // Any status code that lie within the range of 2xx cause this function to trigger
         // Do something with response data
         if (!error.response) {
            // toast.error('Network Error', {
            //   toastId: 'id-network-error',
            // })
         } else if (error.response.status === 500) {
            // toast.error('500 Internet server Error', {
            //   toastId: 'id-code-500',
            // })
         }
         //check status code with backend to handler it
         else if (error.response.status === 400) {
            // toast.warn(error.response.message, {
            //   toastId: 'id-code-400',
            // })
            return error.response
         }
         //check status code with backend if user has token
         else if (error.response.status === 401) {
            // window.location.href = window.location.origin
            return error.response
         }

         return error.response
      },
   )
   return axiosInstance
}

export default AxiosFetch
