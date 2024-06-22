import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export const Home = () => {
  return (
    <View>
      <Image
        source={require("../../../assets/logo-up.png")}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>
          Una comunidad de estudiantes que comparten el mismo viaje que tú
        </Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.subtitle}>Únete hoy</Text>
        <Button
          icon="google"
          mode="outlined"
          onPress={() => console.log("Pressed")}
        >
          Ingresa con Google
        </Button>
        <Text style={styles.helperText}>
          Al registrarte aceptas los términos de servicios y la política de
          privacidad, incluida la política de uso de Cookies
        </Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  logoImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    borderRadius: 100,
    marginTop: 100,
  },

  title: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 20,
    fontSize: 25,
    textAlign: "left",
  },

  helperText: {
    fontSize: 12,
    marginHorizontal: 8,
  },
  button: {
    marginVertical: 10,
  },
});
