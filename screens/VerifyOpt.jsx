import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Button,
  Pressable,
  Keyboard,
} from "react-native";
import OtpInput from "../components/OtpInput";

const VerifyOtp = ({ navigation, route }) => {
  const [otp, setOtp] = useState("");
  const [isOtpReady, setIsOtpReady] = useState(false);
  const { phoneNumber } = route.params;

  const handleSubmit = () => {
    console.log("handle press clicked");
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <OtpInput
        otp={otp}
        isOtpReady={isOtpReady}
        maximumLength={4}
        setOtp={setOtp}
        setIsOtpReady={setIsOtpReady}
      />
      <TouchableOpacity
        style={styles.button}
        disabled={!isOtpReady}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}> Submit</Text>
      </TouchableOpacity>
    </Pressable>
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

  buttonContainer: {
    backgroundColor: "#d8e9a8",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    marginTop: 30,
  },

  buttonText: {
    color: "#333",
    fontSize: 20,
  },
});

export default VerifyOtp;
