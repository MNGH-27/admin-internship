import axios from 'axios'

const axiosInstance = axios.create({
   baseURL: 'https://api.testsajad.ir/api/admin/',
})

export default axiosInstance
