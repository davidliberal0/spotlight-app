import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "../../styles/auth.styles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href={"/notifications"}>Feed Screen with things</Link>
    </View>
  );
}
