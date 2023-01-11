// import React, { useState, useRef } from "react";
// import {
//  SafeAreaView,
//  StyleSheet,
//  View,
//  TouchableOpacity,
//  Text,
// } from "react-native";
// import { Colors } from "react-native/Libraries/NewAppScreen";
// import PhoneInput from "react-native-phone-number-input";

// const PhoneNumber = ({ navigation }) => {
//  const [value, setValue] = useState("");
//  const [formattedValue, setFormattedValue] = useState("");
//  const phoneInput = useRef(null);
//  useRef

//  return (
//    <>
//      <View style={styles.container}>
//        <SafeAreaView style={styles.wrapper}>
//          <View style={styles.welcome}>
//            <Text>Welcome!</Text>
//          </View>
//          <PhoneInput
//            ref={phoneInput}
//            defaultValue={value}
//            defaultCode="INDIA"
//            layout="first"
//            onChangeText={(text) => {
//              setValue(text);
//            }}
//            onChangeFormattedText={(text) => {
//              setFormattedValue(text);
//            }}
//            countryPickerProps={{ withAlphaFilter: true }}
//            withShadow
//            autoFocus
//          />
//          <TouchableOpacity
//            style={styles.button}
//            onPress={() => {
//              // TODO - send SMS!
//            }}
//          >
//            <Text style={styles.buttonText}>Send Otp </Text>
//          </TouchableOpacity>
//        </SafeAreaView>
//      </View>
//    </>
//  );
// };

// const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: Colors.lighter,
//  },

//  wrapper: {
//    flex: 1,
//    justifyContent: "center",
//    alignItems: "center",
//  },

//  button: {
//    marginTop: 20,
//    height: 50,
//    width: 300,
//    justifyContent: "center",
//    alignItems: "center",
//    backgroundColor: "#7CDB8A",
//    shadowColor: "rgba(0,0,0,0.4)",
//    shadowOffset: {
//      width: 1,
//      height: 5,
//    },
//    shadowOpacity: 0.34,
//    shadowRadius: 6.27,
//    elevation: 10,
//  },

//  buttonText: {
//    color: "white",
//    fontSize: 14,
//  },

//  welcome: {
//    padding: 20,
//  },

//  status: {
//    padding: 20,
//    marginBottom: 20,
//    justifyContent: "center",
//    alignItems: "flex-start",
//    color: "gray",
//  },
// });

// export default PhoneNumber;

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

const PhoneNumber = () => {
  const phoneInput = useRef();

  // const [phoneInput, setPhoneInput] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");

  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");

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
      {/* <Button
        style={styles.buttonText}
        title="Send Otp "
        onPress={() => {
          const checkValid = phoneInput.current?.isValidNumber(phoneNumber);
          setShowMessage(true);
          setValid(checkValid ? checkValid : false);
          console.log(checkValid);
          console.log(formattedPhoneNumber);
        }}
      /> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const checkValid = phoneInput.current?.isValidNumber(phoneNumber);
          setShowMessage(true);
          setValid(checkValid ? checkValid : false);
          console.log(checkValid);
          console.log(formattedPhoneNumber);
        }}
      >
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

  // button: {
  //   backgroundColor: "#333",
  //   //  flex:1
  //   // marginTop: 20,
  //   marginBottom: 20,
  // },

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

  //  welcome: {
  //    padding: 20,
  //  },

  //  status: {
  //    padding: 20,
  //    marginBottom: 20,
  //    justifyContent: "center",
  //    alignItems: "flex-start",
  //    color: "gray",
  //  },
});

export default PhoneNumber;
