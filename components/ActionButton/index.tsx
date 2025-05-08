import { Pressable, Text, StyleSheet } from "react-native";

interface ActionButtonProps {
  title: string;
  active: boolean;
  handlePress: () => void;
}

export const ActionButton = ({
  title,
  active,
  handlePress,
}: ActionButtonProps) => {
  return (
    <Pressable
      onPress={handlePress}
      style={active ? styles.contextButtonActive : null}
    >
      <Text style={styles.contextButtonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contextButtonText: {
    fontSize: 12.5,
    color: "#FFF",
    padding: 8,
  },
  contextButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
});
