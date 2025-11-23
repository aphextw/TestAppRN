import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import Svg, { Path } from "react-native-svg";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarActiveTintColor: "#FE5900",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          borderTopWidth: -1,
          shadowColor: "#000",
          backgroundColor: "#000",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "400",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path
                color={"red"}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.25 8.25L9.625 0L0 8.25V19.1628H19.25V8.25Z"
                fill={color}
              />
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Payments",
          tabBarIcon: ({ color }) => (
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.2466 0L14.6692 1.42259L18.9094 5.66288L19.4987 6.25213L18.9094
                6.84139L14.6692 11.0817L13.2466 12.5043V9.04254H8.02775V3.46175H13.2466V0ZM6.25213
                 7.35677L4.82954 8.77937L0.589257 13.0196L0 13.6089L0.589257 14.1981L4.82954
                  18.4385L6.25213 19.861V16.3993H11.4709V10.8185H6.25213V7.35677Z"
                fill={color}
              />
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="notFound"
        options={{
          title: "s",
          tabBarIcon: ({ color }) => (
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.2466 0L14.6692 1.42259L18.9094 5.66288L19.4987 6.25213L18.9094
                6.84139L14.6692 11.0817L13.2466 12.5043V9.04254H8.02775V3.46175H13.2466V0ZM6.25213
                 7.35677L4.82954 8.77937L0.589257 13.0196L0 13.6089L0.589257 14.1981L4.82954
                  18.4385L6.25213 19.861V16.3993H11.4709V10.8185H6.25213V7.35677Z"
                fill={color}
              />
            </Svg>
          ),
        }}
      />
    </Tabs>
  );
}
