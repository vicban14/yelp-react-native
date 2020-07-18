import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [result, setResult] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  async function searchApi(searchTerm) {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      })
      setResult(response.data.businesses)
    } catch (err) {
      setErrorMessage('Something went wrong!')
    }
  }

  useEffect(() => {
    searchApi('pasta')
  }, [])

  return [searchApi, result, errorMessage]
}
