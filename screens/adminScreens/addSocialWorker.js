import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { Button,Input } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import firebase from '../../config/config';

export default class addSocialWorker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      socialWorker: {}
    }
  }

  onChangeLastName = (value) => {
    var tempData = this.state.socialWorker;
    tempData.lastName = value;
    this.setState({ socialWorker: tempData })
  }
  onChangeEmail = (value) => {
    var tempData = this.state.socialWorker;
    tempData.email = value;
    // this.setState({ socialWorker: tempData })
  }
  onChangeFirstName = (value) => {
    var tempData = this.state.socialWorker;
    tempData.firstName = value;
    this.setState({ socialWorker: tempData })
  }
  onChangePassword = (value) => {
    var tempData = this.state.socialWorker;
    tempData.password = value;
    this.setState({ socialWorker: tempData })
  }
  onChangeId = (value) => {
    var tempData = this.state.socialWorker;
    tempData.id = value;
    this.setState({ socialWorker: tempData })
  }
  onChangePhone = (value) => {
    var tempData = this.state.socialWorker;
    tempData.phone = value;
    this.setState({ socialWorker: tempData })
  }

  save = async () => {
    var tempSocialWorker = this.state.socialWorker
    tempSocialWorker.role = 'sw'
    tempSocialWorker.parent = []
    tempSocialWorker.kids = []
    var createUser = firebase.functions().httpsCallable('createUser');
    //console.log('createUser ref: ', createUser);
    await createUser(tempSocialWorker)
      .then((resp) => {
        //Display success
        console.log('succes create social worker');
        // console.log(resp.data.result);
        // setModalLoading(false);
        // setMessage('הוספת ילד בוצעה בהצלחה');
      })
      .catch((error) => {
        // console.log('values', values);
        var code = error.code;
        var message = error.message;
        //Display error
        console.log(code + ' ' + message);
        // setModalLoading(false);
        // setMessage(error.message);
      });

  }


  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>

          <ImageBackground style={{ height: '100%' }} source={require('../../assets/new_background09.png')}>

            <ScrollView>
              {/* <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => this.onChangeLastName(text)}
                value={this.state.socialWorker.lastName}
              /> */}

              <Input
                keyboardType='default'
                maxLength={40}
                selectionColor={'black'}
                onChangeText={text => this.onChangeLastName(text)}
                value={this.state.socialWorker.lastName}
                placeholder='הכנס שם משפחה'
                placeholderTextColor='lightgray'
                label='שם משפחה'
                  placeholderTextColor='gray'
                labelStyle={{ color: 'black', marginRight: 5 }}
                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                textAlign='right'
                inputStyle={{ backgroundColor: 'lightgray', color: 'gray', borderWidth: 1, borderRadius: 7, borderColor: 'lightgray', paddingHorizontal: 10 }}
              />
              <Input
                keyboardType='email-address'
                maxLength={40}
                selectionColor={'black'}
                onChangeText={text => this.onChangeEmail(text)}
                value={this.state.socialWorker.email}
                placeholder='yout_name@domain.com'
                placeholderTextColor='lightgray'
                label='אימייל'
                  placeholderTextColor='gray'
                labelStyle={{ color: 'black', marginRight: 5 }}
                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                textAlign='right'
                inputStyle={{ backgroundColor: 'lightgray', color: 'gray', borderWidth: 1, borderRadius: 7, borderColor: 'lightgray', paddingHorizontal: 10 }}
              />
              <Input
                keyboardType='default'
                maxLength={40}
                selectionColor={'black'}
                onChangeText={text => this.onChangeFirstName(text)}
                value={this.state.socialWorker.firstName}
                placeholder='הכנס שם פרטי'
                placeholderTextColor='lightgray'
                label='שם פרטי'
                  placeholderTextColor='gray'
                labelStyle={{ color: 'black', marginRight: 5 }}
                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                textAlign='right'
                inputStyle={{ backgroundColor: 'lightgray', color: 'gray', borderWidth: 1, borderRadius: 7, borderColor: 'lightgray', paddingHorizontal: 10 }}
              />
              <Input
                keyboardType='default'
                maxLength={40}
                selectionColor={'black'}
                onChangeText={text => this.onChangePassword(text)}
                value={this.state.socialWorker.passowrd}
                placeholder='סיסמה'
                placeholderTextColor='lightgray'
                label='סיסמה'
                placeholderTextColor='gray'
                labelStyle={{ color: 'black', marginRight: 5 }}
                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                textAlign='right'
                inputStyle={{ backgroundColor: 'lightgray', color: 'gray', borderWidth: 1, borderRadius: 7, borderColor: 'lightgray', paddingHorizontal: 10 }}
              />
              <Input
                keyboardType='numeric'
                maxLength={40}
                selectionColor={'black'}
                onChangeText={text => this.onChangeId(text)}
                value={this.state.socialWorker.id}
                placeholder='הכנס תעודת זהות'
                placeholderTextColor='lightgray'
                label='תעודת זהות'
                placeholderTextColor='gray'
                labelStyle={{ color: 'black', marginRight: 5 }}
                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                textAlign='right'
                inputStyle={{ backgroundColor: 'lightgray', color: 'gray', borderWidth: 1, borderRadius: 7, borderColor: 'lightgray', paddingHorizontal: 10 }}
              />
              <Input
                keyboardType='numeric'
                maxLength={40}
                selectionColor={'black'}
                onChangeText={text => this.onChangePhone(text)}
                value={this.state.socialWorker.phone}
                placeholder='הכנס מספר טלפון'
                placeholderTextColor='lightgray'
                label='מספר טלפון'
                placeholderTextColor='gray'
                labelStyle={{ color: 'black', marginRight: 5 }}
                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                textAlign='right'
                inputStyle={{ backgroundColor: 'lightgray', color: 'gray', borderWidth: 1, borderRadius: 7, borderColor: 'lightgray', paddingHorizontal: 10 }}
              />
              {/* <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => this.onChangeEmail(text)}
                value={this.state.socialWorker.email}
              />
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => this.onChangeFirstName(text)}
                value={this.state.socialWorker.firstName}
              />
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => this.onChangePassword(text)}
                value={this.state.socialWorker.passowrd}
              />
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => this.onChangeId(text)}
                value={this.state.socialWorker.id}
              /> */}
              <Button
                buttonStyle={styles.button}
                title="שמור"
                onPress={() => this.save()}
                color='#767ead'
                icon={<MaterialCommunityIcons
                  name="account-details"
                  size={26}
                  color="white"
                />
                }
                titleStyle={{ marginRight: 5 }}
                iconRight
              />

            </ScrollView>

          </ImageBackground>

        </SafeAreaView>


      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

