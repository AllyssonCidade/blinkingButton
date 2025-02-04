import React, { useEffect } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const BlinkingButton = () => {
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.2, { duration: 2000 }), -1, true);
  }, []);
  9;
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <TouchableOpacity style={styles.button}>
      <Animated.View style={[styles.innerButton, animatedStyle]}>
        <Text style={styles.text}>My BlikingButton</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "black",
  },
  innerButton: { padding: 10, flexDirection: "row", alignItems: "center" },
  text: { color: "#fff", fontSize: 16, textAlign: "center" },
});

export default BlinkingButton;
