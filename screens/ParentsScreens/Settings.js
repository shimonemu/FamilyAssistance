import React, { Component } from 'react';
import { StyleSheet,View, Text,Button } from 'react-native';


class Settings extends React.Component {

    render() {
      return (
        <View style={styles.container}>
          <Text> Settings </Text>
        </View>
      );
    }
  }


export default Settings;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  