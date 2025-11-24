import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

const NotificationHeader = ({ onBackPress, onRightPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={[styles.button, styles.buttonLeft]}
        onPress={onBackPress}
      >
        <View style={styles.iconWrap}>
          <Image
            style={styles.leftIcon}
            source={require("../../assets/images/Vector.svg")}
          />
        </View>
      </TouchableOpacity>

      <Text style={styles.title}>Notifications</Text>

      <TouchableOpacity
        style={[styles.button, styles.buttonRight]}
        onPress={onRightPress}
      >
        <Image
          source={require("../../assets/images/ArrowUp.svg")}
          style={styles.iconWrapRight}
        >
          <View style={styles.rightIcon} />
        </Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: 375,
    height: 57,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#060503",
  },
  title: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: 21,
    lineHeight: 25,
    color: "#FFFFFF",
    textAlign: "center",
  },
  button: {
    padding: 9,
    position: "absolute",
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLeft: {
    left: 16,
    top: 16.5,
  },
  buttonRight: {
    right: 16,
    top: 16.5,
  },
  iconWrap: {
    width: 6,
    height: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  leftIcon: {
    width: 10,
    height: 16,
    transform: [{ scaleX: -1 }],
  },
  iconWrapRight: {
    width: 18,
    height: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  rightIcon: {
    width: 18,
    height: 17,
    backgroundColor: "#FFFFFF",
  },
});

export default NotificationHeader;
