import React, { FC } from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import styles from "./RepoCard.styles";
import type { RepoCardProps } from "./RepoCard.types";
import { COLORS } from "@/theme/colors";

const RepoCard: FC<RepoCardProps> = ({ repo }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={[styles.repoName, { flexGrow: 2 }]}>
          {repo.name || "Sin nombre"}
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL(repo.html_url)}>
          <FontAwesome
            name="external-link-alt"
            size={18}
            color={COLORS.PRIMARY}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://github.com/" + repo.owner.login)
          }
        >
          <Image
            source={{ uri: repo.owner.avatar_url }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.description}>
        Autor:{" "}
        <Text style={styles.textBold}>{repo.owner.login || "Sin autor"}</Text>
      </Text>
      <Text style={styles.description}>
        {repo.description || "Sin descripción"}
      </Text>
      <Text style={styles.language}>{repo.language || "Sin lenguaje"}</Text>

      <View style={styles.statsContainer}>
        <Text style={styles.stat}>
          Estrellas:{" "}
          <Text style={styles.textBold}>{repo.stargazers_count || 0}</Text>
        </Text>
        <Text style={styles.stat}>
          Forks: <Text style={styles.textBold}>{repo.forks_count || 0}</Text>
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(repo.html_url)}
      >
        <Text style={styles.buttonText}>Ver Repositorio</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RepoCard;
