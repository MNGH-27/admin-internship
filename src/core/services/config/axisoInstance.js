import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://bineshpro.ir/api/',
})

export default axiosInstance
