import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UsersScreen from "@/screens/users-screen";
import ReposScreen from "@/screens/repos-screen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import type { MainTabParamList } from "@/types/navigation";

const Tab = createBottomTabNavigator<MainTabParamList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="users"
        component={UsersScreen}
        options={{
          tabBarIcon: () => <FontAwesome name="user" size={25} />,
          headerShown: false,
          title: "Usuarios",
        }}
      />

      <Tab.Screen
        name="repos"
        component={ReposScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunity name="source-repository" size={25} />
          ),
          headerShown: false,
          title: "Repositorios",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
