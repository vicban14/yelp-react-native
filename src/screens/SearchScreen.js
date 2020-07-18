import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
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

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmitting={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {result.length} businesses</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
