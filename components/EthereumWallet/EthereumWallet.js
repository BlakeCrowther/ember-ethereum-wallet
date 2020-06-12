import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import DeviceInfo from 'react-native-device-info';

import styles from './EthereumWallet.styles';

// const wallet = require('eth-wallet-light');

export default function EthereumWallet() {
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  const password = 'password';

  // async () => {

  // };

  useEffect(() => {
    const checkStorage = async () => {
      try {
        const storedPublicKey = await AsyncStorage.getItem('asyncPublicKey');
        const storedPrivateKey = await AsyncStorage.getItem('asyncPrivateKey');
        if (storedPublicKey && storedPrivateKey) {
          setPublicKey(storedPublicKey);
          setPrivateKey(storedPrivateKey);
        } else {
          getNewAddress();
        }
      } catch (err) {
        console.log(err);
      }
    }
    checkStorage();
  }, []);

  getNewAddress = async () => {
    try {
      // var keystore = await new wallet.Keystore()
      //   .initializFromEntropy('entropy', password)
      //   .then(console.log('Address: ', keystore.getAddress()));
      //   // generateSecureRandom(32
      //   // ).then((randomBytes) =>
      //   //   randomBytes.join('').toString(),
      //   // ),
      //   // console.log('privateKey: ', keystore.getPrivateKey(password));
      const newPublicKey = `${Math.random() * 100000000}`;
      const newPrivateKey = `${Math.random() * 100000000}`;
      setPublicKey(newPublicKey);
      setPrivateKey(newPrivateKey);
      await AsyncStorage.setItem('asyncPublicKey', newPublicKey);
      await AsyncStorage.setItem('asyncPrivateKey', newPrivateKey);
    } catch (err) {
      console.log(err);
    }
  }

  clearAsyncStorage = async () => {
    console.log(await AsyncStorage.getItem('asyncPublicKey'));
    await AsyncStorage.clear();
  }


  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Ember Ethereum Wallet</Text>
      <View style={styles.SubContainer}>
        <View style={styles.InputContainer}>
          <Text style={styles.SubTitle}>Public Key:</Text>
          <TextInput
            style={styles.TextInput}
            value={publicKey}
            selectTextOnFocus={true}
          />
        </View>
        <View style={styles.InputContainer}>
          <Text style={styles.SubTitle}>Private Key:</Text>
          <TextInput
            style={styles.TextInput}
            value={privateKey}
            selectTextOnFocus={true}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.Button} onPress={getNewAddress}>
        <Text style={styles.ButtonText}>Generate a new one</Text>
      </TouchableOpacity>
    </View>
  );
}
