import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './EthereumWallet.styles';

export default function EthereumWallet() {
  const [publicKey, setPublicKey] = useState('public');
  const [privateKey, setPrivateKey] = useState('private');

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
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.ButtonText}>Generate a new one</Text>
      </TouchableOpacity>
    </View>
  );
}
