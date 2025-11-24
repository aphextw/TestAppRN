import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

const mockUser = { name: "Charlotte" };

const Header = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.centered]}>
        <View style={[styles.circle, { marginRight: 12 }]}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/Union.svg")}
          />
        </View>

        <TouchableOpacity
          onPress={() => router.push("./Notification")}
          style={[styles.row, styles.centered]}
        >
          <Text style={[styles.regularText, { marginRight: 8 }]}>
            {mockUser.name}
          </Text>
          <Image
            style={{ height: 10, width: 6 }}
            source={require("../../../assets/images/Vector.svg")}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Image
          style={{ height: 18, width: 18 }}
          source={require("../../../assets/images/qr.svg")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centered: { alignItems: "center" },
  row: { flexDirection: "row" },
  button: {
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    paddingTop: 5,
    padding: 2,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  regularText: {
    fontSize: 16,
    color: "#fff",
  },
  image: {
    height: 15,
    width: 15,
  },
  circle: {
    borderRadius: 30,
    backgroundColor: "#0F0F0F",
    justifyContent: "center",
    alignItems: "center",
    height: 36,
    width: 36,
  },
});

export default Header;
