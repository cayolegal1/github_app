import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainTabParamList } from "@/types/navigation";
import UsersScreen from "@/screens/users-screen";
import ReposScreen from "@/screens/repos-screen";


const Tab = createBottomTabNavigator<MainTabParamList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="users" component={UsersScreen} />
      <Tab.Screen name="repos" component={ReposScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
