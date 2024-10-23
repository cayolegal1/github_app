import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type MainTabParamList = {
  users: undefined;
  repos: undefined;
};

export type UsersScreenProps = BottomTabScreenProps<MainTabParamList, "users">;
export type ReposScreenProps = BottomTabScreenProps<MainTabParamList, "repos">;
