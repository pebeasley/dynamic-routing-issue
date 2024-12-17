import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Link
        push
        href={{
          pathname: "/[page_id]",
          params: { page_id: getRandomInt(1000) },
        }}
        asChild
      >
        <Pressable>
          <Text>Navigate</Text>
        </Pressable>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "bold" },
  separator: { marginVertical: 30, height: 1, width: "80%" },
});
