import { StyleSheet, View } from "react-native";
import Headler from "./components/headler";
import BoasVindas from "./components/boasVindas";
import Inputs from "./components/inputs";
import Footer from "./components/footer";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.componente1}>
        <Headler />
      </View>
      <View style={styles.componente2}>
        <BoasVindas />
      </View>
      <View style={styles.componente3}>
        <Inputs />
      </View>
      <View style={styles.componente4}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    marginTop: 35,
    backgroundColor: "#fff",
  },

  componente1: {
    flex: 4,
  },

  componente2: {
    flex: 2,
  },

  componente3: {
    flex: 2,
  },

  componente4: {
    flex: 4,
  },
});
