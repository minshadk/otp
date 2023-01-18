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
import OtpInput from "../components/OtpInput";

const VerifyOtp = ({ navigation, route }) => {
  const [otp, setOtp] = useState("");
  const [isOtpReady, setIsOtpReady] = useState(false);
  const { phoneNumber } = route.params;
  return (
    <View style={styles.container}>
      <OtpInput
        otp={otp}
        isOtpReady={isOtpReady}
        setOtp={setOtp}
        setIsOtpReady={setIsOtpReady}
      />
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

export default VerifyOtp;
