import { View, Text, SectionList } from "react-native";
import BiggerCard from "./biggerCard";

export const SECTION_DATA = [
  {
    title: "TODAY, 17 JUNE",
    data: [
      {
        key: 1,
        name: "Received from Anna",
        subtitle: "Debit •• 4385 $4,098.12",
        amount: "+$110",
        date: "17 June 2025, 17:49 · Payments",
        avatar: require("../../../assets/images/Avatar.png"),
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
          "Would you like to visit new countries? Maybe it’s your time!",
        date: "16 June 2025, 08:53 · Payments",
        avatar: require("../../../assets/images/Avatar (2).png"),
        unread: false,
      },
      {
        key: 4,
        name: "Sent to •• 2041",
        subtitle: "Debit •• 4385 $4,098.12",
        amount: "-$14.62",
        date: "24 March 2025, 12:00 · Payments",
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
        subtitle: "Debit •• 4385 $4,098.12",
        amount: "-$14.62",
        date: "24 March 2025, 12:00 · Payments",
        avatar: require("../../../assets/images/Avatar (2).png"),
        unread: false,
      },
    ],
  },
];

const ExpensesList = () => {
  const renderSectionHeader = ({ section }) => (
    <View
      style={{
        marginBottom: 10,
        paddingTop: 12,
        borderTopWidth: 1,
        borderColor: "#1F1F1F",
        paddingHorizontal: 16,
      }}
    >
      <Text
        style={{
          fontSize: 12,
          fontWeight: "600",
          color: "#AEAEAE",
          textTransform: "uppercase",
        }}
      >
        {section.title}
      </Text>
    </View>
  );

  const renderItem = ({ item }) => <BiggerCard data={item} />;

  return (
    <SectionList
      style={{ flex: 1 }}
      sections={SECTION_DATA}
      keyExtractor={(item) => item.key.toString()}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      // contentContainerStyle={{ gap:  }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ExpensesList;
