import { View, Text, Image, StyleSheet } from "react-native";
import formatSubtitle from "../../../utils/formatSubtitle";

const BiggerCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {data.avatar ? (
          <Image source={data.avatar} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder} />
        )}

        <View style={{ gap: 9 }}>
          <Text style={styles.name}>{data.name}</Text>
          {data.amount && <Text style={styles.amount}>{data.amount}</Text>}

          <Text style={styles.subtitle} numberOfLines={2} ellipsizeMode="tail">
            {data.subtitle}
          </Text>

          <Text style={styles.date}>{data.date}</Text>
        </View>
      </View>

      {data.unread && <View style={styles.unreadDot} />}
    </View>
  );
};

export default BiggerCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: 90,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 30,
    marginTop: 15,
  },
  row: { flexDirection: "row" },
  unreadDot: {
    alignSelf: "flex-start",
    width: 8,
    height: 8,
    backgroundColor: "#FE5900",
    borderRadius: 4,
    marginRight: 4,
  },

  avatar: {
    marginRight: 12,
    alignSelf: "flex-start",
    width: 42,
    height: 42,
    borderRadius: 12,
  },

  avatarPlaceholder: {
    marginRight: 12,
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#0F0F0F",
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
    backgroundColor: "#FE5900",
    borderRadius: 3,
  },

  subtitle: {
    maxWidth: 300,
    fontSize: 14,
    color: "#AEAEAE",
    fontWeight: "400",
  },

  rightBlock: {
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 4,
  },

  amount: {
    fontSize: 21,
    fontWeight: "600",
    color: "#FE5900",
  },

  date: {
    fontSize: 12,
    fontWeight: "400",
    color: "#616161",
  },
});
