import { COLORS } from "@/constants/theme"
import { styles } from "@/styles/auth.styles"
import Ionicons from "@expo/vector-icons/build/Ionicons"
import React from "react"
import { View, Text, LogBox } from "react-native"

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
    </View>
  )
}

export default login