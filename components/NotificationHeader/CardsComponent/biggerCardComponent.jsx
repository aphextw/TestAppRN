import { View, Text, SectionList, StyleSheet } from "react-native";
import BiggerCard from "./biggerCard";

export const SECTION_DATA = [
  {
    title: "TODAY, 17 JUNE",
    data: [
      {
        key: 1,
        name: "Received from Anna",
        subtitle: "Debit •• 4385\n" + "$4,098.12",
        amount: "+$110",
        date: "17 June 2025, 17:49 · Payments",
        avatar: require("../../../assets/images/prettyWoman.jpg"),
        unread: true,
      },
    ],
  },
  {
    title: "YESTERDAY, 16 JUNE",
    data: [
      {
        key: 3,
        name: "See our limited offer!",
        subtitle:
          "Would you like to visit new countries?\n" + "Maybe it’s your time!",
        date: "16 June 2025, 23:08 · Travel",
        unread: false,
      },
      {
        key: 4,
        name: "Sent to •• 2041",
        subtitle: "Debit •• 4385\n" + "$3,987.5",
        amount: "-$14.62",
        date: "16 June 2025, 06:18· Payments",
        avatar: require("../../../assets/images/Avatar (2).png"),
        unread: false,
      },
    ],
  },
  {
    title: "24 MARCH, 2025",
    data: [
      {
        key: 4,
        name: "New login into account",
        subtitle:
          "You have logged in from a new location:\n" +
          "iOS 26.0.1 · 109.255.84.7 · Spain",
        date: "24 March 2025, 15:44 · Security",
        avatar: require("../../../assets/images/Avatar (2).png"),
        unread: false,
      },
    ],
  },
];

const ExpensesList = () => {
  const renderSectionHeader = ({ section }) => (
    <View style={styles.container}>
      <Text style={styles.text}>{section.title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <BiggerCard data={item} />;

  return (
    <View style={{ flex: 1 }}>
      <SectionList
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        sections={SECTION_DATA}
        keyExtractor={(item) => item.key.toString()}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    paddingTop: 17,
    borderTopWidth: 1,
    borderColor: "#1F1F1F",
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
    color: "#AEAEAE",
    textTransform: "uppercase",
  },
});
