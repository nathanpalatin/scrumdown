import { View, Center, VStack, HStack, Text } from "native-base";
import Logo from "@assets/logo.svg";

import { Button } from "@components/Button";

export function Header({ navigation, route }) {
  const currentRoute = route.name;

  function AboutUs() {
    navigation.navigate("aboutus");
  }

  function Contact() {
    navigation.navigate("contact");
  }

  function Home() {
    navigation.navigate("home");
  }

  return (
    <VStack px={"12"} mt={20}>
      <Center>
        <Logo />
      </Center>
      <HStack justifyContent={"center"} py={"4"} >
        <Button title="Home" active={currentRoute === "home"} onPress={Home} />

        <Button
          title="Sobre nós"
          active={currentRoute === "aboutus"}
          onPress={AboutUs}
        />

        <Button
          title="Contato"
          active={currentRoute === "contact"}
          onPress={Contact}
        />
      </HStack>
    </VStack>
  );
}
