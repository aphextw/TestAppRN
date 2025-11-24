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
          paddingTop: 6,
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
        name="tab1"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => (
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.165 0C6.734 0 4.403 0.966 2.684 2.685C0.966 4.404 0 6.736 0 9.167C0 11.598 0.966 13.93 2.684 15.649C4.403
                   17.368 6.734 18.333 9.165 18.333C11.596 18.333 13.927 17.368 15.646 15.649C17.364 13.93 18.33 11.598 18.33
                   9.167C18.33 6.736 17.364 4.404 15.646 2.685C13.927 0.966 11.596 0 9.165 0ZM8.332
                   4.167V10H12.498V8.333H9.998V4.167H8.332Z"
                  fill={color}
                />
              </Svg>
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="tab2"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => (
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.789 0h.833c4.598 0 8.325 3.727 8.325 8.325v.833h-.833h-7.492H10.789V0ZM0
                       11.622a8.325 8.325 0 0 0 8.325 8.325c4.598 0 8.325-3.727 8.325-8.325v-.834h-.833H9.158V4.13v-.834H8.325C3.727
                       3.297 0 7.024 0 11.622Z"
                fill={color}
              />
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="tab3"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => (
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C7.34783 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34783 0 10C0 11.5498 0.359787
                13.0626 1.03304 14.4265L0.153875 19.8411L5.60459 18.9822C6.39386 19.3684 7.23252 19.6499 8.09902
                 19.8177C7.87033 19.6331 7.65053 19.4357 7.44078 19.2259C5.87798 17.6631 5 15.5435 5 13.3333C5
                  11.1232 5.87798 9.00358 7.44078 7.44078C9.00358 5.87798 11.1232 5 13.3333 5C15.5435 5 17.6631
                   5.87798 19.2259 7.44078C19.4357 7.65053 19.6331 7.87033 19.8177 8.09903C19.4412 6.15434 18.492
                    4.34985 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM18.0474 8.61925C16.7972 7.36904 15.1014
                     6.66667 13.3333 6.66667C11.5652 6.66667 9.8695 7.36904 8.61925 8.61925C7.36904 9.8695 6.66667
                      11.5652 6.66667 13.3333C6.66667 15.1014 7.36904 16.7972 8.61925 18.0474C9.8695 19.2976 11.5652
                       20 13.3333 20C14.3587 20 15.3597 19.7638 16.2636 19.3215L19.8974 19.8941L19.3113 16.2843C19.7602
                        15.3751 20 14.3666 20 13.3333C20 11.5652 19.2976 9.8695 18.0474 8.61925Z"
                fill={color}
              />
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="Notification"
        options={{
          title: "Notification",
          tabBarShowLabel: false,
          href: null,
          tabBarIcon: ({ color }) => (
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C7.34783 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34783 0 10C0 11.5498 0.359787
                20 13.3333 20C14.3587 20 15.3597 19.7638 16.2636 19.3215L19.8974 19.8941L19.3113 16.2843C19.7602
                15.3751 20 14.3666 20 13.3333C20 11.5652 19.2976 9.8695 18.0474 8.61925Z"
                fill={color}
              />
            </Svg>
          ),
        }}
      />
    </Tabs>
  );
}
