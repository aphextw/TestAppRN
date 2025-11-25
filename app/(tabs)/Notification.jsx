import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import NotificationHeader from "../../components/NotificationHeader/Header/NotificationHeader";
import NotificationButtons from "../../components/NotificationHeader/Header/notificationButtons";
import BiggerCardComponent from "../../components/NotificationHeader/CardsComponent/biggerCardComponent";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.mainContainer} edges={["top"]}>
      <NotificationHeader onBackPress={() => router.back()} />
      <NotificationButtons />
      <BiggerCardComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centered: { alignItems: "center" },
  row: { flexDirection: "row" },
  mainContainer: {
    backgroundColor: "#060503",
    paddingTop: 5,
    flex: 1,
  },
  container: { marginHorizontal: 16 },
});
