import { StyleSheet } from "react-360";

export const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  greetingBox: {
    padding: 30,
    backgroundColor: "white",
    opacity: 0.8,

    borderColor: "white",
    borderRadius: 5,
    borderWidth: 2,
    margin: 10
  },
  title: {
    fontSize: 50,
    marginBottom: 10,
    color: "black"
  },
  greeting: {
    fontSize: 30,
    color: "black"
  }
});
