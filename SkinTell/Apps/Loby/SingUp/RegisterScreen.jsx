import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../../../components/Background';
import Logo from '../../../components/Logo';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import TextInput from '../../../components/TextInput';
import BackButton from '../../../components/BackButton';
import Colors from '../../../Utils/Colors/Colors';
import validationFunctions from '../helpers/Validations';

const { nameValidator, emailValidator, passwordValidator, genderValidator, ageValidator, contactValidator } = validationFunctions;
import { Constants } from 'expo';


export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [age, setAge] = useState({ value: '', error: '' });
  const [gender, setGender] = useState({ value: '', error: '' });
  const [contact, setContact] = useState({ value: '', error: '' });

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const genderError = genderValidator(gender.value);
    const ageError = ageValidator(age.value);
    const contactError = contactValidator(contact.value);

    if (emailError || passwordError || nameError || genderError || contactError || ageError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setGender({ ...gender, error: genderError });
      setAge({ ...age, error: ageError });
      setContact({ ...contact, error: contactError });
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    });
    const obj ={
      name:name.value, email:email.value, password:password.value, gender:gender.value, age:age.value, contact:contact.value
    }
    console.log('this is object', obj)
  };

  return (
    <Background>
      {/* <BackButton goBack={navigation.goBack} /> */}
      <Logo />
      <Header>SignUp with Skin Tell.</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TextInput
        label="Age"
        returnKeyType="next"
        value={age.value}
        onChangeText={text => setAge({ value: text, error: '' })}
        error={!!age.error}
        errorText={age.error}
        keyboardType="numeric"
      />

       {/* Gender radio buttons */}
       <View style={styles.genderContainer}>
        <Text>Gender:</Text>
        <TouchableOpacity
          style={[styles.genderButton, gender.value === 'male' && { backgroundColor: Colors.PRIMARY }]}
          onPress={() => {
            if (gender.value === null) {
              setGender({ value: 'male', error: gender.error });
            } else {
              setGender({ value: 'male', error: '' });
            }
          }}
        >
          <Text style={styles.genderButtonText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.genderButton, gender.value === 'female' && { backgroundColor: Colors.PRIMARY }]}
          onPress={() => {
            if (gender.value === null) {
              setGender({ value: 'female', error: gender.error });
            } else {
              setGender({ value: 'female', error: '' });
            }
          }}
        >
          <Text style={styles.genderButtonText}>Female</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        label="Contact Number"
        returnKeyType="done"
        value={contact.value}
        onChangeText={text => setContact({ value: text, error: '' })}
        error={!!contact.error}
        errorText={contact.error}
        keyboardType="phone-pad"
      />
     
     {/* <View style={styles.countryCodeContainer}>
        {Constants ? (
          <Text>{Constants.deviceCountry} Country Code: {Constants.countryCode}</Text>
        ) : (
          <Text>Loading Constants...</Text>
        )}
      </View> */}


      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Next
      </Button>
      <View style={styles.row}>
        <Text>I already have an account !</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={styles.link}>Log in</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: Colors.PRIMARY,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  genderButton: {
    backgroundColor: '#eee',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 99,
  },
  genderButtonText: {
    color: 'black',
  },
  countryCodeContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
});
