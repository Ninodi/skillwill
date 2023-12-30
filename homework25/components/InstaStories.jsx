import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import InstaStoryCotainer from './InstaStoryCotainer'
import FollowingsStories from './FollowingsStories'

const InstaStories = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{maxHeight: 110, borderBottomWidth: 1, borderBottomColor: '#EAEDED', marginBottom: 10, paddingBottom: 5}}>
        <InstaStoryCotainer img={require('../assets/images/myInstaProfile.png')} user={'My story'}/>
        <FollowingsStories />
    </ScrollView>
  )
}

export default InstaStories
