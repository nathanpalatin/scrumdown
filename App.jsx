import {
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_700Bold,
  useFonts,
} from "@expo-google-fonts/outfit";

import { StatusBar } from "expo-status-bar";

import { NativeBaseProvider } from "native-base";

import { AuthContextProvider } from "@contexts/AuthContext";

import { Loading } from "@components/Loading";
import { THEME } from "./src/theme";

import { Routes } from "@routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar hidden />
      <AuthContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
