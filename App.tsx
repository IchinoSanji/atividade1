import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductScreen from './components/ProductScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <ProductScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});