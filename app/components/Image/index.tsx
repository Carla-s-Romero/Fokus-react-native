import { StyleSheet, Image } from "react-native";

export const ImageApp = ({ timerType }) => {
  return (
    <Image
      style={styles.imagesTimer}
      source={timerType.imageCapa}
    />
  );
};

const styles = StyleSheet.create({
  imagesTimer: {
    width: "100%",
    height: "50%",
  },
});