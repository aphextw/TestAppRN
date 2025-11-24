import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icons } from "./buttons";

const MENU_ITEMS = [
  { id: 1, title: "Travel", icon: "travel" },
  { id: 2, title: "Delivery", icon: "delivery" },
  { id: 3, title: "Bonuses", icon: "bonuses" },
  { id: 4, title: "Support", icon: "support" },
];

const ButtonsRow = ({ items = MENU_ITEMS }) => {
  return (
    <View style={styles.row}>
      {items.map((item) => {
        const Icon = Icons[item.icon]; // берём иконку из объекта

        return (
          <TouchableOpacity key={item.id} style={styles.button}>
            {Icon ? <Icon /> : null}
            <Text style={styles.label}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ButtonsRow;

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 24,
    padding: 7.5,
  },
  button: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    marginTop: 11,
    fontSize: 14,
    fontWeight: "500",
    color: "#FFFFFF",
  },
});
