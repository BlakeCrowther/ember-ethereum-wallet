import React from 'react';
import {SafeAreaView, View, Text, StatusBar, StyleSheet} from 'react-native';

import EthereumWallet from './components/EthereumWallet/EthereumWallet';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.Container}>
        <EthereumWallet />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default App;
