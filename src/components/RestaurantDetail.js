import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

function RestaurantDetail({ result }) {
  return (
    <View>
      <Image
        source={{ uri: result.image_url }}
        style={styles.restaurantImage}
      />
      <Text style={styles.restaurantName}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  restaurantImage: {
    height: 120,
    width: 250,
  },
  restaurantName: {
    fontWeight: 'bold',
  },
})

export default RestaurantDetail
