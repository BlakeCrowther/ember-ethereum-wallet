import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import { generateSecureRandom } from 'react-native-securerandom';

import styles from './EthereumWallet.styles';

// If the rn-nodeify method for using react-native-crypto didn't give 
// build failures then I would import the shim file I had deleted, and 
// uncomment some of the code that would satisfy the general requirements 
// provided by the assignment.
// import '../../shim.js';

// I might be wrong but I was getting errors that the eth-wallet-light 
// package still had a peer dependency on 'crypto'.
// const wallet = require('eth-wallet-light');

export default function EthereumWallet() {
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  useEffect(() => {
    // Checks for a public and private key in AsyncStorage if it exists, 
    // otherwise it calls getNewAddress to generate one. 
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

  // This asynchronous function should generate a new Ethereum address
  // and its associated private key and store them in AsyncStorage. Currently 
  // generates random placeholder due to issues previously mentioned. 
  getNewAddress = async () => {
    try {
      // const password = 'password';
      // var keystore = await new wallet.Keystore(generateSecureRandom(32)
      //   .then((randomBytes) => randomBytes.join('').toString()))
      //   .initializFromEntropy('entropy', password) 
      //   // If going into production I might use the CSPRNG I imported to 
      //   // generate the additional entropy. I might also consider using 
      //   // some randomness collected from hardware sources on the device.
      // const newPublicKey = `${keystore.getAddress()}`;
      // const newPrivateKey = `${keystore.getPrivateKey(password)}`
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
