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
  Pressable,
} from "react-native";

// const { selected, options, placeholder, error, setSelected, inputProps } =
// props;

const OtpInput = (props) => {
  const { otp, setOtp, isOtpReady, setIsOtpReady } = props;
  const boxArray = new Array(4).fill(0);
  const inputRef = useRef();

  const boxDigit = (_, index) => {
    const emptyInput = "";
    const digit = otp[index] || emptyInput;
    return (
      <View key={index} style={styles.splitBoxes}>
        <Text style={styles.splitBoxText}>{digit}</Text>
      </View>
    );
  };

  const handleOnBlur = () => {};

  return (
    <View style={styles.container}>
      {/* <TextInput style={styles.container} /> */}
      <Pressable style={styles.splitOtpBoxesContainer}>
        {boxArray.map(boxDigit)}
      </Pressable>
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
  splitOtpBoxesContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  splitBoxes: {
    borderColor: "e5e5e5",
    borderWidth: 2,
    borderRadius: 5,
    padding: 12,
    minWidth: 50,
  },
  splitBoxText: {
    fontSize: 20,
    textAlign: "center",
    color: "#e5e5e5",
  },
});

export default OtpInput;
