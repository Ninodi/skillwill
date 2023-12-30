import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const InstaStoryCotainer = ({img, user}) => {
  return (
    <View style={styles.instaStoryContainer}>
        <View style={styles.instaStoryImgContainer}>
            <Image
                source={img}
                style={{ width: '100%', height: '100%', borderRadius: 50 }}
            />
        {user === 'My story' && (
          <View style={styles.addStoryBtn}>
            <Image
              source={require('../assets/images/addStory.png')}
              style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
            />
          </View>
        )}
        </View>
        <Text numberOfLines={1} ellipsizeMode="tail">{user}</Text>
    </View>
  )
}

export default InstaStoryCotainer

const styles = StyleSheet.create({
    instaStoryContainer: {
        width: 70,
        alignItems: 'center',
        marginLeft: 25,

        gap: 8
    },
    instaStoryImgContainer: {
        width: 70,
        height: 70,
        borderRadius: 50,
        // overflow: 'hidden',
        backgroundColor: 'red',
        position: 'relative'
    },
    addStoryBtn: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: -5,
        bottom: 0,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
    }
})