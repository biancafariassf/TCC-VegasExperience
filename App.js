import React from 'react';
import { StyleSheet, View } from 'react-native';
import Carousel from './carousel';

export default function App() {
  return (
    <View style={styles.container}>
      <Carousel navigation={{ navigate: () => {} }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
