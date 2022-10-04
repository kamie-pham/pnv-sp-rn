import React from "react";
import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeTabParamList,
  HomeTabScreenProps,
  RootStackParamList,
} from "./types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../containers/HomeScreen";
import FeedScreen from "../containers/FeedScreen";
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {};

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<HomeTabParamList>();

export const navigationRef = createNavigationContainerRef();

export function navigate(name: any, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function RootNavigation({}: Props) {
  return (
    <NavigationContainer ref={navigationRef}>
        <BottomTabNavigator />
    </NavigationContainer>
  );
}

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ contentStyle: { backgroundColor: "white" } }}
    >
      <Stack.Group
        screenOptions={(navigation) => ({
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerShown: false,
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FeedScreen" component={FeedScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  const homeTabRef = React.useRef();
  const feedTabRef = React.useRef();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({route}) => ({
        tabBarIconStyle: { marginBottom: -5 },
        tabBarItemStyle: { paddingBottom: 5 },
        tabBarIcon: ({ focused, color, size }) => {
            let iconName: any = 'home';
            if (route.name === 'FeedTab') {
              iconName = 'list';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
      })}
    >
    <BottomTab.Screen
      name="HomeTab"
      component={HomeScreen}
      options={({ navigation }: HomeTabScreenProps<"HomeTab">) => ({
					title: 'Home',
      })}
    />
    <BottomTab.Screen
      name="FeedTab"
      component={FeedScreen}
      options={({ navigation }: HomeTabScreenProps<"FeedTab">) => ({
        title: 'Feed',
      })}
    />
    </BottomTab.Navigator>
  );
}

export default RootNavigation;
