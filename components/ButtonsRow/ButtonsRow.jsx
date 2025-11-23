import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Svg, Path } from "react-native-svg";

const MENU_ITEMS = [
  { id: 1, title: "Travel", icon: "travel" },
  { id: 2, title: "Delivery", icon: "delivery" },
  { id: 3, title: "Bonuses", icon: "bonuses" },
  { id: 4, title: "Support", icon: "support" },
];

const TravelIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      opacity="0.2"
      d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0Z"
      fill="#FE5900"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.3041 12.7363L15.0001 15.4801V23.6219C20.1758 22.2898 24.0001 17.5915 24.0001 12C24.0001 9.38763 23.1653 6.97024 21.748 5H15.5486C13.0365 5 11.0001 7.03641 11.0001 9.54845C11.0001 10.7409 11.4684 11.8857 12.3041 12.7363ZM0.166016 14H6.00009C8.20923 14 10.0001 15.7909 10.0001 18V23.8341C4.97509 22.991 1.00905 19.025 0.166016 14Z"
      fill="#FE5900"
    />
  </Svg>
);

const DeliveryIcon = () => (
  <Svg width="21" height="24" viewBox="0 0 21 24" fill="none">
    <Path
      opacity="0.2"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.20703 6.92773H6.20703V17.9277H18.207V6.92773H7.20703Z"
      fill="#FE5900"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.91421 2.5L1.41421 0L0 1.41421L2.20712 3.62133L2.20759 18.0983C1.04214 18.51 0.20711 19.6214 0.20711 20.9278C0.20711 22.5846 1.55025 23.9278 3.20711 23.9278C4.51332 23.9278 5.62456 23.093 6.0364 21.9278H17.2929L19 23.6349L20.4142 22.2207L18.4142 20.2207L18.1213 19.9278H6.0364C5.73517 19.0755 5.05977 18.4 4.20759 18.0987L4.20711 3.20707L4.20709 2.79288L3.91421 2.5Z"
      fill="#FE5900"
    />
  </Svg>
);

const BonusesIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M93.207 4.92773C93.207 3.82316 94.1025 2.92773 95.207 2.92773C96.3116 2.92773 97.207 3.82316 97.207 4.92773V7.42773H99.207V4.92773C99.207 3.82316 100.102 2.92773 101.207 2.92773C102.312 2.92773 103.207 3.82316 103.207 4.92773C103.207 5.15387 103.027 6.01236 102.152 6.59568L100.652 7.59568L101.762 9.25978L103.262 8.25978C104.787 7.2431 105.207 5.70159 105.207 4.92773C105.207 2.71859 103.416 0.927734 101.207 0.927734C100.012 0.927734 98.9399 1.45149 98.207 2.28191C97.4741 1.45149 96.4017 0.927734 95.207 0.927734C92.9979 0.927734 91.207 2.71859 91.207 4.92773C91.207 5.70159 91.6273 7.2431 93.1523 8.25978L94.6523 9.25978L95.7617 7.59568L94.2617 6.59568C93.3868 6.01236 93.207 5.15387 93.207 4.92773Z"
      fill="#FE5900"
    />
    <Path
      opacity="0.2"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M87.207 6.92773H109.207V12.4277H108.207V22.9277H88.207V12.4277H87.207V6.92773Z"
      fill="#FE5900"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M108.207 12.4277H88.207V14.4277H97.207V22.9277H99.207V14.4277H108.207V12.4277Z"
      fill="#FE5900"
    />
  </Svg>
);

const SupportIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V16C18 18.4853 15.9853 20.5 13.5 20.5H13V19H11V24H13V22.5H13.5C17.0899 22.5 20 19.5898 20 16V8C20 3.58172 16.4183 0 12 0C7.58172 0 4 3.58172 4 8V17H6V8Z"
      fill="#FE5900"
    />
    <Path
      opacity="0.2"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 8H0V17H6V8Z"
      fill="#FE5900"
    />
    <Path
      opacity="0.2"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 8H18V17H24V8Z"
      fill="#FE5900"
    />
  </Svg>
);

const ButtonsRow = ({ items = MENU_ITEMS }) => {
  const renderIcon = (item) => {
    switch (item.icon) {
      case "travel":
        return <TravelIcon />;
      case "delivery":
        return <DeliveryIcon />;
      case "bonuses":
        return <BonusesIcon />;
      case "support":
        return <SupportIcon />;
      default:
        return (
          <View style={styles.iconContainer}>
            <View style={styles.iconBg} />
            <View style={styles.icon} />
          </View>
        );
    }
  };

  return (
    <View style={styles.row}>
      {items.map((item) => (
        <TouchableOpacity key={item.id} style={styles.button}>
          {renderIcon(item)}
          <Text style={styles.label}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ButtonsRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: 24,
    height: 24,
    position: "relative",
    marginBottom: 8,
  },
  iconBg: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#FE5900",
    opacity: 0.2,
    borderRadius: 6,
  },
  icon: {
    position: "absolute",
    left: 2,
    right: 2,
    top: 2,
    bottom: 2,
    backgroundColor: "#FE5900",
    borderRadius: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#FFFFFF",
  },
});
