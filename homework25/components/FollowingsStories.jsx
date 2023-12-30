import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import users from './InstaUsers'
import InstaStoryCotainer from './InstaStoryCotainer'

const FollowingsStories = () => {
  return (
    <FlatList
        horizontal
        data={users}
        renderItem={({ item }) => (
            <InstaStoryCotainer key={Math.random()} img={item.img} user={item.username} />
        )}
    />
  )
}

export default FollowingsStories

const styles = StyleSheet.create({})