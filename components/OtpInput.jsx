// import React from "react";
import React, { useRef, useState, useEffect } from "react";
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

const OtpInput = (props) => {
  const { otp, setOtp, isOtpReady, setIsOtpReady, maximumLength } = props;
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);
  const boxArray = new Array(4).fill(0);
  const inputRef = useRef();

  const boxDigit = (_, index) => {
    const emptyInput = "";
    const digit = otp[index] || emptyInput;

    const isCurrentValue = index === otp.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = otp.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    useEffect(() => {
      setIsOtpReady(otp.length === maximumLength);
      return () => {
        setIsOtpReady(false);
      };
    }, [otp]);

    return (
      // <View key={index} style={[styles.splitBoxes, styles.splitBoxesFocused]}>
      <View
        key={index}
        style={[
          styles.splitBoxes,
          isInputBoxFocused && isValueFocused ? styles.splitBoxesFocused : null,
        ]}
      >
        <Text style={styles.splitBoxText}>{digit}</Text>
      </View>
    );
  };

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

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
    // position: " absolute",
    // opacity: 0,
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
  splitBoxesFocused: {
    borderColor: "#ecdbba",
    backgroundColor: "grey",
  },
});

export default OtpInput;
