import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Avatar  from './components/Avatar';
import AuthorRow from './components/AuthorRow';
import Card from './components/Card'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <AuthorRow
        fullname={'Chiazokam Echeta'}
        linkText={'Comments'}
        onPressLinkText={() => {
          console.log('Pressed link!');
        }}
      /> */}

      <Card
        fullname={'First Last'}
        linkText={'Comments'}
        onPressLinkText={() => {
          console.log('Pressed link!');
        }}
        image={{ uri: 'https://unsplash.it/600/600' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
});
