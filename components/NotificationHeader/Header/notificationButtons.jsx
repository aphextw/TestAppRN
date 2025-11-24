import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomTabs = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabsData = [
    { id: 0, text: "All", width: 17 },
    { id: 1, text: "Payments", width: 66 },
    { id: 2, text: "System", width: 50 },
    { id: 3, text: "Delivery", width: 54 },
    { id: 4, text: "Travel", width: 41 },
  ];

  const tabWidths = [41, 90, 74, 78, 65];

  return (
    <View style={styles.container}>
      {tabsData.map((tab, index) => (
        <TouchableOpacity
          key={tab.id}
          style={[
            styles.tab,
            { width: tabWidths[index] },
            activeTab === tab.id && styles.activeTab,
          ]}
          onPress={() => setActiveTab(tab.id)}
        >
          <View style={[styles.textContainer, { width: tab.width }]}>
            <Text
              style={[styles.text, activeTab === tab.id && styles.activeText]}
            >
              {tab.text}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    boxSizing: "border-box",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 24,
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#1F1F1F",
    flex: 0,
    alignSelf: "stretch",
  },
  tab: {
    boxSizing: "border-box",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    height: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#FE5900",
  },
  textContainer: {
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
    color: "#AEAEAE",
    flex: 0,
  },
  activeText: {
    color: "#FE5900",
  },
});

export default CustomTabs;
