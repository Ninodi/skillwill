import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InstaHeader = () => {
  return (
    <View style={styles.instaNavContainer}>
      <View style={styles.textLogoContainer}>
        <Image 
          source={require('../assets/images/instaTxtLogo.png')}
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }}/>
      </View>
      <View style={{flexDirection: 'row', gap: 30}}>
        <View style={styles.heartIconContainer}>
          <Image 
            source={require('../assets/images/heart.png')}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </View>
        <View style={styles.chatIconContainer}>
          <Image 
            source={require('../assets/images/chat.png')}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </View>
      </View>
    </View>
  )
}

export default InstaHeader

const styles = StyleSheet.create({
  instaNavContainer:{
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textLogoContainer: {
    width: 110,
    height: 30,
  },
  heartIconContainer:{
    width: 25,
    height: 25,
  },
  chatIconContainer:{
    width: 25,
    height: 25,
  }
})