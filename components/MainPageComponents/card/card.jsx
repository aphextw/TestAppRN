import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ data = CARD_DATA }) => {
  return (
    <View style={styles.container}>
      {data.avatar ? (
        <Image source={data.avatar} style={styles.avatar} />
      ) : (
        <View style={styles.avatarPlaceholder} />
      )}

      <View style={styles.textBlock}>
        <Text style={styles.name}>{data.name}</Text>

        <View style={styles.subtitleRow}>
          <View style={styles.dot} />
          <Text style={styles.subtitle}>{data.subtitle}</Text>
        </View>
      </View>

      <View style={styles.rightBlock}>
        <Text style={styles.amount}>{data.amount}</Text>
        <Text style={styles.date}>{data.date}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    backgroundColor: "#0F0F0F",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 12,
  },

  avatarPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "#333",
  },

  textBlock: {
    flexDirection: "column",
    gap: 4,
    flexGrow: 1,
  },

  name: {
    fontSize: 14,
    fontWeight: "500",
    color: "#FFFFFF",
  },

  subtitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  dot: {
    width: 6,
    height: 6,
    backgroundColor: "#CC3F02",
    borderRadius: 3,
  },

  subtitle: {
    fontSize: 14,
    color: "#B3B3B3",
    fontWeight: "400",
  },

  rightBlock: {
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 4,
  },

  amount: {
    fontSize: 14,
    fontWeight: "500",
    color: "#FFFFFF",
  },

  date: {
    fontSize: 14,
    fontWeight: "400",
    color: "#B3B3B3",
  },
});
