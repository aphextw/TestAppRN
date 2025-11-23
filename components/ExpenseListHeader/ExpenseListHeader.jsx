import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { useEffect, useRef } from "react";

const MIN_WIDTH = 8;

const barData = [
  { finalWidth: 114, color: "#CC3F02" },
  { finalWidth: 85, color: "#FE5900" },
  { finalWidth: 81, color: "#FF9332" },
  { finalWidth: 57, color: "#FFD8A5" },
];

const ExpensesBlock = () => {
  const animations = useRef(
    barData.map(() => new Animated.Value(MIN_WIDTH)),
  ).current;

  useEffect(() => {
    Animated.parallel(
      animations.map((anim, index) =>
        Animated.timing(anim, {
          toValue: barData[index].finalWidth,
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
        <Text style={styles.title}>Expenses in June</Text>

        <Text style={styles.amount}>$5,091</Text>
      </View>

      <View style={styles.barContainer}>
        {barData.map((bar, i) => (
          <Animated.View
            key={i}
            style={[
              styles.bar,
              {
                backgroundColor: bar.color,
                width: animations[i],
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ExpensesBlock;

const styles = StyleSheet.create({
  container: {
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
    gap: 6,
    alignItems: "center",
  },
  bar: {
    height: 8,
    borderRadius: 3,
  },
});
