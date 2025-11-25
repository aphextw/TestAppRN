import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Svg, Line } from "react-native-svg";

const Card = ({
  background,
  amount,
  type,
  last4,
  imageStyle,
  bgColor,
  imageFirst = true,
}) => {
  return (
    <TouchableOpacity
      style={[styles.cardContainer, { backgroundColor: bgColor }]}
    >
      <ImageBackground
        resizeMode="cover"
        source={background}
        imageStyle={imageStyle}
        style={[styles.card, imageFirst && styles.cardTop]}
      >
        <View style={styles.mastercardWrapper}>
          <Image
            style={{ width: 26, height: 16 }}
            source={require("../../../assets/images/Exclude.png")}
          />
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.amount}>{amount}</Text>

          <View style={styles.row}>
            <Text style={styles.cardType}>{type}</Text>
            <Text style={styles.cardNumber}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 17,
                  letterSpacing: -0.2,
                }}
              >
                ••
              </Text>{" "}
              {last4}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const AddCard = () => (
  <TouchableOpacity style={styles.addCard}>
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Line
        x1="7.25"
        y1="0"
        x2="7.25"
        y2="14"
        stroke="white"
        strokeWidth="1.5"
      />
      <Line
        x1="14"
        y1="6.75"
        x2="0"
        y2="6.75"
        stroke="white"
        strokeWidth="1.5"
      />
    </Svg>
  </TouchableOpacity>
);

const CardsBlock = () => {
  return (
    <View style={styles.container}>
      <Card
        background={require("../../../assets/images/orangeCard.jpg")}
        bgColor={"#FE5900"}
        imageStyle={[
          styles.cardImage,
          {
            opacity: 0.6,
            transform: [
              { scale: 2.2 },
              { translateX: 36 },
              { translateY: -15 },
            ],
          },
        ]}
        amount="$4,098.12"
        type="Debit"
        last4="4385"
        imageFirst
      />

      <Card
        background={require("../../../assets/images/Card.png")}
        imageStyle={[
          styles.cardImage,
          {
            transform: [
              { scale: 1.5 },
              { translateX: 13 },
              { translateY: -16 },
            ],
          },
        ]}
        amount="$14.71"
        type="Debit"
        last4="9081"
        imageFirst={false}
      />

      <AddCard />
    </View>
  );
};

export default CardsBlock;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    width: "100%",
    height: 98,
  },
  cardContainer: {
    flex: 1,
    minWidth: 142,
    borderRadius: 16,
  },
  card: {
    width: "100%",
    height: 98,
    padding: 12,
    borderRadius: 16,
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  cardImage: {
    borderRadius: 16,
  },
  cardTop: {
    zIndex: 2,
  },
  mastercardWrapper: {
    width: 26,
    height: 16,
    justifyContent: "center",
  },
  mcWrapper: {
    width: 26,
    height: 16,
    position: "relative",
  },
  mcCircleLeft: {
    position: "absolute",
    width: 16,
    height: 16,
    backgroundColor: "#FFFFFF",
    opacity: 0.6,
    borderRadius: 8,
    left: 0,
    top: 0,
  },
  mcCircleRight: {
    position: "absolute",
    width: 16,
    height: 16,
    backgroundColor: "#FFFFFF",
    opacity: 0.6,
    borderRadius: 8,
    left: 10,
    top: 0,
  },

  textBlock: {
    height: 45,
    gap: 6,
  },
  amount: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
    textShadowColor: "rgba(0,0,0,0.12)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardType: {
    fontSize: 14,
    color: "#FFFFFF",
    textShadowColor: "rgba(0,0,0,0.12)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  cardNumber: {
    fontSize: 14,
    color: "#FFFFFF",
    textShadowColor: "rgba(0,0,0,0.12)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  addCard: {
    minWidth: 40,
    width: 40,
    height: 98,
    backgroundColor: "#0F0F0F",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
