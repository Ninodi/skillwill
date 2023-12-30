import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InstaNavigation = () => {
  return (
    <View style={styles.navContainer}>
        <View styles={styles.navItemContainer}>
            <Image
                source={require('../assets/images/home.png')}
                style={styles.navItemImg}
            />
        </View>
        <View styles={styles.navItemContainer}>
            <Image
                source={require('../assets/images/search.png')}
                style={styles.navItemImg}
            />
        </View>
        <View styles={styles.navItemContainer}>
            <Image
                source={require('../assets/images/addPost.png')}
                style={styles.navItemImg}
            />
        </View>
        <View styles={styles.navItemContainer}>
            <Image
                source={require('../assets/images/reels.png')}
                style={styles.navItemImg}
            />
        </View>
        <View styles={styles.navItemContainer}>
            <Image
                source={require('../assets/images/myInstaProfile.png')}
                style={[styles.navItemImg, styles.userProfile]}
            />
        </View>
    </View>
  )
}

export default InstaNavigation

const styles = StyleSheet.create({
    navContainer: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: '#fff'
    },
    navItemContainer: {
        width: 100,
        height: 100, 
    },
    navItemImg: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
    },
    userProfile: {
        borderRadius: 50
    }
})