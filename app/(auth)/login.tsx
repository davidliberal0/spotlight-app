import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/auth.styles";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import React from "react";
import { View, Text, LogBox, Image } from "react-native";

const login = () => {
  return (
    <View style={styles.container}>
      {/* Brand Section */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>spotlight</Text>
        <Text style={styles.tagline}>don't miss anything</Text>
      </View>
      {/* Illustration */}
      <View style={styles.illustrationContainer}>
        <Image
          style={styles.illustration}
          source={require("../../assets/images/Online-wishes-bro.png")}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default login;
