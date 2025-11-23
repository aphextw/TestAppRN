import { View, Text, SectionList } from "react-native";
import Card from "../card/card";
import ExpenseListHeader from "../ExpenseListHeader/ExpenseListHeader";

export const SECTION_DATA = [
  {
    title: "Today",
    data: [
      {
        key: 1,
        name: "Matthew Billson",
        subtitle: "Money Transfer",
        amount: "$56.19",
        date: "Jun 9, 12:08",
        avatar: require("../../assets/images/Avatar.png"),
      },
    ],
  },
  {
    title: "Yesterday",
    data: [
      {
        key: 2,
        name: "Starbucks",
        subtitle: "Food",
        amount: "$122.47",
        date: "Jun 8, 19:21",
        avatar: require("../../assets/images/Avatar (1).png"),
      },
      {
        key: 3,
        name: "Netflix",
        subtitle: "Entertainment",
        amount: "$13.17",
        date: "Jun 8, 08:53",
        avatar: require("../../assets/images/Avatar (2).png"),
      },
    ],
  },
];

const ExpensesList = () => {
  const renderSectionHeader = ({ section }) => (
    <View style={{ marginBottom: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "500", color: "#FFFFFF" }}>
        {section.title}
      </Text>
    </View>
  );

  const renderItem = ({ item }) => <Card data={item} />;

  return (
    <>
      <ExpenseListHeader />
      <SectionList
        sections={SECTION_DATA}
        keyExtractor={(item) => item.key.toString()}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        contentContainerStyle={{ gap: 10 }}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default ExpensesList;
