import {
  Center,
  HStack,
  Image,
  Text,
  VStack,
  Button as Button2,
} from "native-base";

import { ImageBackground } from "react-native";

import Logo from "@assets/logo.svg";
import Icone1 from "@assets/icon-home1.png";
import Icone2 from "@assets/icon-home2.png";

import { Button } from "@components/Button";

export function Home({ navigation }) {
  function aboutUs() {
    navigation.navigate("aboutus");
  }

  return (
    <VStack flex={1}>
      <Image
        w={"full"}
        h={"56"}
        source={Icone1}
        alt="Icon1"
        position={"absolute"}
        top={680}
        left={-100}
        resizeMode="contain"
      />
      <Center pt={`20`}>
        <Logo />
      </Center>
      <VStack flex={1} px={"12"} py={"8"}>
        <HStack justifyContent={"space-between"} mb={16}>
          <Button2 bg={"transparent"}>
            <Text color={"gray.100"} fontSize={"lg"}>
              Home
            </Text>
          </Button2>
          <Button2 bg={"transparent"} onPress={aboutUs}>
            <Text color={"gray.300"} fontSize={"lg"}>
              Sobre nós
            </Text>
          </Button2>
          <Button2 bg={"transparent"}>
            <Text color={"gray.300"} fontSize={"lg"}>
              Contato
            </Text>
          </Button2>
        </HStack>
        <Text color={"#fff"} fontSize={"xxl"} textAlign={`center`}>
          List de Skins – Todos os Personagens e Roupas!
        </Text>
        <Text color={"#71808C"} fontSize={"xl"} mt={"6"} textAlign={"center"}>
          Se você está procurando uma lista completa de todos os Skins, então
          você veio ao lugar certo.
        </Text>
        <Center>
          <Button
            title="COMEÇAR AGORA"
            mt={"100"}
            fontSize={"21"}
            variant={"outline"}
            onPress={() => navigation.navigate("signin")}
          />
        </Center>

        <Image
          w={"full"}
          h={"40"}
          source={Icone2}
          alt="Icon2"
          position={"absolute"}
          top={560}
          right={-50}
          resizeMode="contain"
        />
      </VStack>
    </VStack>
  );
}
