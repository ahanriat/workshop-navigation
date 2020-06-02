import React from "react";
import ProfileScreen from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";
import { createStackNavigator } from "@react-navigation/stack";

const ProfileStack = createStackNavigator();

export type ProfileStackParamList = {
  Profile: NoProps;
  Settings: NoProps;
};

export default function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Settings" component={SettingsScreen} />
    </ProfileStack.Navigator>
  );
}
