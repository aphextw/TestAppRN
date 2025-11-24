import { Platform, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/MainPageComponents/header/header";
import ExpensesList from "../../components/MainPageComponents/expensesList/expensesList";
import ButtonsRow from "../../components/MainPageComponents/ButtonsRow/ButtonsRow";
import CardsBlock from "../../components/MainPageComponents/CardsComponent/CardsComponent";
import CardsComponent from "../../components/MainPageComponents/CardsComponent/CardsComponent";

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.container}>
        <Header />
        <ButtonsRow />
        <CardsComponent />
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
