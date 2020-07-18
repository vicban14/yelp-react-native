import axios from 'axios'

export default axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Autorization: `Bearer ${process.env.API_KEY}`,
  },
})
