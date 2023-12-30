import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import InstaHeader from './components/InstaHeader';
import InstaStories from './components/InstaStories';
import users from './components/InstaUsers';
import InstaNavigation from './components/InstaNavigation';
import InstaFeed from './components/InstaFeed';

export default function App() {
  console.log(users)
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 50 }} >
      <StatusBar style="auto" />
      <ScrollView style={styles.container}>
        <InstaHeader />
        <InstaStories />
        <InstaFeed />
      </ScrollView>
      <InstaNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
