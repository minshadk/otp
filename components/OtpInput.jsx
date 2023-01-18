// import React from "react";
import React, { useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Button,
  TextInput,
} from "react-native";

// const { selected, options, placeholder, error, setSelected, inputProps } =
// props;

const OtpInput = (props) => {
  const { otp, setOtp, isOtpReady, setIsOtpReady } = props;
  const inputRef = useRef();

  const handleOnBlur = () => {};

  return (
    <View style={styles.container}>
      {/* <TextInput style={styles.container} /> */}
      <TextInput
        placeholder="useless placeholder"
        style={styles.input}
        value={otp}
        onChangeText={setOtp}
        maxLength={4}
        ref={inputRef}
        onBlur={handleOnBlur}
      />
    </View>
    // <View>
    //   <Text>test</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    //   color: "red",
    width: 300,
    // borderColor: "#e5e5e5",
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
  },
});

export default OtpInput;
