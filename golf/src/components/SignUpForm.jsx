import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckBox from '@react-native-community/checkbox';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import AuthFooter from './AuthFooter';

const SignUpForm = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSignUp = () => {
    console.log({ firstName, lastName, email, password, inviteCode });
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid={true} extraScrollHeight={30}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor={colors.placeHolderColor}
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor={colors.placeHolderColor}
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={colors.placeHolderColor}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.placeHolderColor}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Invite Code"
          placeholderTextColor={colors.placeHolderColor}
          value={inviteCode}
          onChangeText={setInviteCode}
        />

        <View style={styles.wrapper}>
          <CheckBox
            value={agree}
            onValueChange={() => setAgree(!agree)}
            tintColors={{ true: colors.primary, false: colors.border }}
          />
          <Text style={styles.termsAndCondtion}>
            I agree to the Terms & Conditions
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <AuthFooter
          text="Already have an account?"
          linkText="Login"
          onPress={() => navigation.navigate('SignInScreen')}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.inputBackground,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(17),
    color: colors.text,
    fontSize: moderateScale(14),
    marginBottom: moderateScale(15),
    borderWidth: 1,
    borderColor: colors.border,
    fontFamily: fonts.poppinsRegular,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  },
  termsAndCondtion: {
    color: colors.text,
    fontSize: moderateScale(13),
    fontFamily: fonts.poppinsRegular,
    marginTop: moderateScale(6),
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  buttonText: {
    color: colors.background,
    fontSize: moderateScale(16),
    fontFamily: fonts.poppinsSemiBold,
  },
});

export default SignUpForm;
