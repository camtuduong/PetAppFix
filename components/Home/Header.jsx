import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { theme } from "../../constants/theme";
import { hp, wp } from "../../helpers/common";
import Icon from "../../assets/icons";
import { useUser } from "@clerk/clerk-expo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Header = () => {
  const router = useRouter();
  const { user } = useUser();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Trang Chủ</Text>
      </View>
      <View style={styles.icons}>
        <Pressable onPress={() => router.push("/ai")}>
          <MaterialCommunityIcons name="magnify" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => router.push("newPost")}>
          <Icon
            name="plus"
            size={hp(3.2)}
            strokeWidth={2}
            color={theme.colors.text}
          />
        </Pressable>
        <Pressable onPress={() => router.push("profile")}>
          <Image
            source={{ uri: user?.imageUrl }}
            style={{ width: 35, height: 35, borderRadius: 99 }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  title: {
    fontFamily: "outfit-bold",
    fontSize: hp(3.2),
    color: "#E8B20E",
  },

  icons: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,
  },
});
