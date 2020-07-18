import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [result, setResult] = useState([])

  async function searchApi() {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'san jose',
      },
    })
    console.log(response)
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmitting={() => searchApi()}
      />
      <Text>Search Screen</Text>
      <Text>We have found {result.length} businesses</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
