import { View, Text, Image, StyleSheet, Alert } from "react-native";
import { Button, Dialog } from "react-native-paper";
import { PopupGoogle } from "../../components/PopupGoogle";
import { useState } from "react";

export const Home = () => {
  const [visible, setVisible] = useState(false);

  const handleLoginGoogle = () => {
    setVisible(true);
  };

  return (
    <View>
      {visible && <PopupGoogle />}
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
          style={styles.Btngoogle}
          icon="google"
          mode="outlined"
          onPress={handleLoginGoogle}
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
    marginHorizontal: 8,
  },
  helperText: {
    fontSize: 12,
    marginHorizontal: 8,
  },
  button: {
    marginVertical: 10,
  },
  Btngoogle: {
    borderColor: "blue",
  },
});
