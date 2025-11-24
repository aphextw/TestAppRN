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
import NotificationHeader from "../../components/NotificationHeader/NotificationHeader";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NotificationHeader onBackPress={() => router.back()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centered: { alignItems: "center" },
  row: { flexDirection: "row" },
  mainContainer: {
    backgroundColor: "#060503",
    paddingHorizontal: 16,
    paddingTop: 5,
    flex: 1,
  },
  container: { marginHorizontal: 16 },
});
