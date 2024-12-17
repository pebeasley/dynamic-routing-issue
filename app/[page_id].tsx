import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
const TestPage = () => {
  const { page_id } = useLocalSearchParams<{ page_id: string }>();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Page ID</Text>
      <Text>{page_id}</Text>
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
      <Text>{JSON.stringify(navigation.getState(), null, 2)}</Text>
    </View>
  );
};
export default TestPage;
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
