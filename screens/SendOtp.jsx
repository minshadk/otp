import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Button,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";

const SendOpt = ({ navigation }) => {
  const phoneInput = useRef();

  const [phoneNumber, setPhoneNumber] = useState("");

  const [isValid, setIsValid] = useState(false);
  // const [showMessage, setShowMessage] = useState(false);

  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");

  const handleSendOtp = () => {
    const checkValid = phoneInput.current?.isValidNumber(phoneNumber);
    // setShowMessage(true);
    setIsValid(checkValid ? checkValid : false);
    isValid &&
      navigation.navigate("VerifyOtp", {
        phoneNumber: formattedPhoneNumber,
      });

    console.log(formattedPhoneNumber);
    console.log(isValid);
  };

  return (
    <View style={styles.container}>
      <PhoneInput
        style={styles.button}
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="first"
        onChangeText={(text) => {
          setPhoneNumber(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedPhoneNumber(text);
        }}
        // withDarkTheme
        // withShadow
        autoFocus
      />
      {!isValid && <Text style={styles.errorText}>invalid phone number</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
        <Text>Send Otp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    marginTop: 20,
    height: 50,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7CDB8A",
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 14,
  },

  errorText: {
    color: "red",
  },
});

export default SendOpt;
