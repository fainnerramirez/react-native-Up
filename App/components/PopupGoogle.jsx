import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Portal } from "react-native-paper";
import Modal from "react-native-modal";

export const PopupGoogle = ({ visible }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <Portal>
      <Modal isVisible={isModalVisible} style={styles.container}>
        <View>
          <Button title="Show modal" onPress={toggleModal} />
          <View>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
    backgroundColor: "#fff",
  },
});
