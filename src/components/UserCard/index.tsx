import React, { type FC } from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import styles from "./UserCard.styles";
import type { UserCardProps } from "./UserCard.types";

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => user.avatar_url && Linking.openURL(user.avatar_url)}
      >
        <Image source={{ uri: user.avatar_url || "" }} style={styles.avatar} />
      </TouchableOpacity>
      <Text style={styles.name}>{user.login || "Hola"}</Text>
      <Text style={styles.bio}>{user.bio || "Sin biografía"}</Text>
      <View style={styles.statsContainer}>
        <Text style={styles.stat}>Repos: <Text style={styles.textBold}>{user.public_repos || 0}</Text></Text>
        <Text style={styles.stat}>Seguidores: <Text style={styles.textBold}>{user.followers || 0}</Text></Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL("https://github.com/" + user.login)}
      >
        <Text style={styles.buttonText}>Ver Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserCard;
