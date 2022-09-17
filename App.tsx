import React from "react";
import { StatusBar } from "react-native";

//import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components/native";

import { Home } from "./src/screens/Home";

import light from "./src/theme/light";
import dark from "./src/theme/dark";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#000" />

      <ThemeProvider theme={light}>
        <Home />
      </ThemeProvider>
    </>
  );
}
