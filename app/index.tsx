import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Animated from "react-native-reanimated";

export default function Index() {
  const [color, setColor] = useState<string>("#000000");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Pressable onPress={() => setColor(prev => prev === "#000000" ? "#FF0000" : "#000000")}>
        {/* This produces an error */}
        <Animated.Text style={{ color, transitionProperty: "color", transitionDuration: 500 }}>Change Color</Animated.Text>
        {/* This doesn't produce any errors */}
        <Animated.Text style={{ color, transitionProperty: "color", transitionDuration: "500ms" }}>Change Color</Animated.Text>
      </Pressable>
    </View>
  );
}
