import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import InstaPost from './InstaPost'
import users from './InstaUsers'

const InstaFeed = () => {
  return (
    <FlatList 
        data={users}
        renderItem={({ item }) => (
            <InstaPost key={Math.random()} img={item.img} user={item.username} post={item.post} />
        )}
        style={{paddingBottom: 50}}
    />
  )
}

export default InstaFeed

const styles = StyleSheet.create({})