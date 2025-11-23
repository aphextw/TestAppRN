import { Platform, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header/header";
import ExpensesList from "../../components/expensesList/expensesList";
import ButtonsRow from "../../components/ButtonsRow/ButtonsRow";

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.container}>
        <Header />
        <ButtonsRow />
        <ExpensesList />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: { alignItems: "center" },
  row: { flexDirection: "row" },
  mainContainer: {
    backgroundColor: "#060503",
    flex: 1,
  },
  container: { marginHorizontal: 16 },
});
