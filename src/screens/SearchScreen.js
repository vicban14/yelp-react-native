import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useRestaurantResult from '../hooks/useRestaurantResult'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, result, errorMessage] = useRestaurantResult()

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
