import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { useEffect, useRef } from "react";

const barData = [
  { finalWidth: "33%", color: "#CC3F02" },
  { finalWidth: "24%", color: "#FE5900" },
  { finalWidth: "23%", color: "#FF9332" },
  { finalWidth: "18%", color: "#FFD8A5" },
];

343;

const mockMonth = "June";

const ExpensesBlock = () => {
  // Все анимации: 0 → 1
  const animations = useRef(barData.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    Animated.parallel(
      animations.map((anim) =>
        Animated.timing(anim, {
          toValue: 1,
          duration: 1200,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: false,
        }),
      ),
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title}>Expenses in </Text>
          <Text style={[styles.title, { color: "#FE5900" }]}>{mockMonth}</Text>
        </View>
        <Text style={styles.amount}>$5,091</Text>
      </View>

      <View style={styles.barContainer}>
        {barData.map((bar, i) => {
          const animatedWidth = animations[i].interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", bar.finalWidth],
          });

          return (
            <Animated.View
              key={i}
              style={[
                styles.bar,
                {
                  backgroundColor: bar.color,
                  width: animatedWidth,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ExpensesBlock;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    paddingTop: 24,
    paddingBottom: 32,
    gap: 12,
  },
  title: {
    fontSize: 21,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  amount: {
    fontSize: 18,
    fontWeight: "400",
    color: "#AEAEAE",
  },
  barContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  bar: {
    height: 8,
    borderRadius: 3,
  },
});
