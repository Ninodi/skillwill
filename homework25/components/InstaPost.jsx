import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InstaPost = ({img, user, post}) => {
  return (
    <View style={{marginBottom: 20}}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10, marginLeft: 25}}>
        <View style={styles.profileMiniContainer}>
            <Image 
                source={img}
                style={{width: '100%', height: '100%', borderRadius: 50}}
            />
        </View>
        <Text>{user}</Text>
      </View>
      <View style={styles.postImg}>
        <Image 
            source={img}
            style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={{flexDirection: 'row', paddingLeft: 25, paddingRight: 25, justifyContent: 'space-between', marginBottom: 15}}>
        <View style={{flexDirection: 'row', gap: 20}}>
            <View style={styles.postControls}>
                <Image 
                    source={require('../assets/images/heart.png')}
                    style={{width: '100%', height: '100%', resizeMode: 'contain'}}
                />
            </View>
            <View style={styles.postControls}>
                <Image 
                    source={require('../assets/images/chat.png')}
                    style={{width: '100%', height: '100%', resizeMode: 'contain', transform: 'rotateY(-180deg)'}}
                />
            </View>
            <View style={styles.postControls}>
                <Image 
                    source={require('../assets/images/share.png')}
                    style={{width: '100%', height: '100%', resizeMode: 'contain'}}
                />
            </View>
        </View>
        <View style={styles.postControls}>
            <Image 
                source={require('../assets/images/savePost.png')}
                style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            />
        </View>
      </View>
      <View style={{paddingLeft: 25, paddingRight: 25, flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text style={{marginRight: 10, fontWeight: '800'}}>{user}</Text>
        <Text>{post}</Text>
      </View>
    </View>
  )
}

export default InstaPost

const styles = StyleSheet.create({
    profileMiniContainer: {
        width: 40,
        height: 40,
        borderRadius: 50,
        overflow: 'hidden'
    },
    postImg: {
        height: 400,
        marginBottom: 15
    },
    postControls: {
        width: 30,
        height: 30,
    }
})