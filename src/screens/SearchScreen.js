import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useRestaurantResult from '../hooks/useRestaurantResult'
import RestaurantList from '../components/RestaurantList'

const RESTAURANTS_TITLES = ['Cost Effective', 'Bit Pricer', 'Bog Spender!']

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, result, errorMessage] = useRestaurantResult()

  const restaurantListArr = []

  RESTAURANTS_TITLES.map((title, index) => {
    restaurantListArr.push(
      <RestaurantList
        title={title}
        key={title}
        style={styles.titleStyle}
        results={filterRestaurantsByPrice(result, index)}
      />
    )
  })

  function filterRestaurantsByPrice(result, index) {
    const filter = index === 0 ? '$' : index === 1 ? '$$' : '$$$'
    return result.filter((restaurant) => {
      return restaurant.price === filter
    })
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmitting={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {result.length} businesses</Text>
      {restaurantListArr}
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
