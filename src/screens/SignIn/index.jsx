import {
  Center,
  Text,
  VStack,
  useToast,
  Box,
  ScrollView,
  Image,
  HStack,
  IconButton,
  Icon
} from "native-base";

import { Entypo } from '@expo/vector-icons'

import { ImageBackground } from "react-native";

import Logo from "@assets/logo.svg";
import Icone1 from "@assets/icon-home1.png";
import Icone2 from "@assets/icon-home2.png";

import { Button } from "@components/Button";
import { InputForm } from "@components/Input";

export function SignIn({ navigation }) {
  const toast = useToast();

  function goBackHome() {
    navigation.goBack();
  }

  function SaveData() {
    toast.show({
      placement: "bottom",
      render: () => {
        return (
          <Box bg={"red.500"} px={"12"} py={"4"} w={"full"} rounded="sm">
            <Text color={"gray.100"} fontFamily={"heading"}>
              Ops, parece que deu algo errado.
            </Text>
          </Box>
        );
      },
    });
  }

  return (
    <VStack flex={1}>
      <ImageBackground
        source={require("@assets/background.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingTop: 50 }}
          showsVerticalScrollIndicator={false}
        >
          <HStack justifyContent={'flex-start'}  alignItems={'center'} mb={'10'}>
          <IconButton
                icon={<Icon as={Entypo} name="chevron-small-left" />}
                borderRadius="full"
                _icon={{
                  color: "gray.300",
                  size: "12",
                }}
                _hover={{
                  bg: "orange.600:alpha.20",
                }}
                _pressed={{
                  bg: "gray.600:alpha.20",
                }}
                onPress={(e) => goBackHome(e)}
              />
            <Text color={"gray.100"} flex={1} textAlign={'center'} fontFamily={"heading"} fontSize={"3xl"}>
              Acessar minha conta
            </Text>
           
          </HStack>
          <Image
            source={Icone1}
            position={"absolute"}
            top={"180"}
            left={"0"}
            alt="Icone flutuante"
          />
          <Center >
            <Logo />
          </Center>
          <VStack flex={1} px={"12"} py={"8"}>
            <Center mt={"40"}>
              <InputForm placeholder="Login" />
              <InputForm placeholder="Senha" secureTextEntry />
              <Button
                title="ENTRAR"
                mt={"2"}
                fontSize={"21"}
                onPress={(e) => SaveData(e)}
              />
              <Image
                source={Icone2}
                position={"absolute"}
                top={"180"}
                right={0}
                alt="Icone flutuante"
              />
              
              <Text onPress={(e) => goBackHome(e)}></Text>
            </Center>
          </VStack>
        </ScrollView>
      </ImageBackground>
    </VStack>
  );
}
