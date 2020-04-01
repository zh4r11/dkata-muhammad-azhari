/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




class EmailValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: ""
    }
  }


  emailvalidate = () => {
    // Candidate has to write logic here 
    var nilai = emailAddress.value;
    var at = nilai.indexOf("@");
    var dot = nilai.indexOf(".");
    if (at < 1 || dot < at + 2 || dot + 2 >= nilai.length) {
      alert(emailAddress, ' is not valid email !');
    }
  }


  render() {
    console.disableYellowBox = true;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <TextInput
                onChangeText={this.emailvalidate}
                value={this.state.emailAddress}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default EmailValidation;