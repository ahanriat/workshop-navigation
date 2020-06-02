import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

interface TabNavigatorProps {}

export default function TabNavigator(props: TabNavigatorProps) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Today" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
}
