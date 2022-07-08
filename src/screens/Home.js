import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

const Home = ({navigation}) => {
  return (
  <View style={styles.container}>
    <Text>Hi</Text>
    <Button onPress={()=>navigation.navigate('Chat')} title='Chat'/>
    <Button title='Discussion'/>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  }
});

export default Home;