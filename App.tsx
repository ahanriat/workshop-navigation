import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Alert, { AlertNavProps } from "./src/Alert";
import { SlideOverlayExample } from "./src/SlideOverlay";

import {
  alertStyleInterpolator,
  getSlideOverlayNavigationOptions,
} from "./src/lib/navigationUtils";
import TabNavigator from "./src/TabNavigator";
import DetailsScreen from "./src/DetailsScreen";
import { ProfileStackParamList } from "./src/ProfileNavigator";

export type RootStackParamList = {
  Main: NoProps;
  Alert: AlertNavProps;
  SlideOverlay: NoProps;
};
export type MainStackParamList = {
  Home: NoProps;
  Details: NoProps;
};

const MainStack = createStackNavigator<MainStackParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name="Details" component={DetailsScreen} />
    </MainStack.Navigator>
  );
}

function RootStackScreen() {
  return (
    <RootStack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "transparent" },
        cardOverlayEnabled: true,
        cardStyleInterpolator: alertStyleInterpolator,
      }}
    >
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="Alert" component={Alert} />
      <RootStack.Screen
        name="SlideOverlay"
        component={SlideOverlayExample}
        options={getSlideOverlayNavigationOptions()}
      />
    </RootStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}

export default App;

interface NavParamList
  extends MainStackParamList,
    RootStackParamList,
    ProfileStackParamList {}

type ScreenName = keyof NavParamList;

export function useNavigate() {
  const { navigate } = useNavigation();
  return (
    screenName: ScreenName,
    params: NavParamList[ScreenName] = undefined
  ) => navigate(screenName, params);
}

// Silent the import loop
console.disableYellowBox = true;
