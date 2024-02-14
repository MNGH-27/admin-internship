import axios from 'axios'

const axiosInstance = axios.create({
   baseURL: 'https://api.sru-intern.ir/api/admin/',
})

export default axiosInstance
