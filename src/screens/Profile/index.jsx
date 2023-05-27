import {
  HStack,
  ScrollView,
  VStack,
  Text,
  Center,
  Image,
  Icon,
  IconButton,
} from "native-base";
import { ImageBackground } from "react-native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

import Logo from "@assets/logo-min.svg";

export function Profile({ navigation }) {
  function goBackPage() {
    navigation.navigate("home");
  }

  return (
    <VStack flex={1} justifyContent={"space-between"}>
      <ImageBackground
        source={require("@assets/background-profile.png")}
        style={{ flexGrow: 1 }}
        resizeMode="cover"
      >
        <HStack
          mt={20}
          justifyContent={"space-between"}
          mb={"4"}
          pr={"3"}
          alignItems={"center"}
        >
          <IconButton
            icon={<Icon as={Entypo} name="chevron-small-left" />}
            borderRadius="full"
            _icon={{
              color: "gray.100",
              size: "12",
            }}
            _hover={{
              bg: "orange.600:alpha.20",
            }}
            _pressed={{
              bg: "gray.600:alpha.20",
            }}
            onPress={(e) => goBackPage(e)}
          />
          <Text color={"gray.100"} fontFamily={"heading"} fontSize={"3xl"}>
            Meu Perfil
          </Text>
          <Logo />
        </HStack>
        <VStack>
          <Center>
            <Image
              source={require("@assets/nathan.png")}
              size={"lg"}
              alt={"ola"}
              rounded={"full"}
              resizeMode="cover"
            />

            <Text
              color={"gray.100"}
              fontFamily={"heading"}
              fontSize={"xl"}
              pt={2}
            >
              Nathan Palatin
            </Text>
            <Text color={"gray.300"} fontFamily={"body"} fontSize={"xl"}>
              Pro Gamer
            </Text>
          </Center>
        </VStack>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          <HStack
            mt={10}
            justifyContent={"space-between"}
            mb={8}
            px={10}
            alignItems={"center"}
          >
            <VStack>
              <Text
                color={"gray.200"}
                fontFamily={"heading"}
                fontSize={"md"}
                textAlign={"center"}
              >
                Membro desde:
              </Text>
              <Text
                color={"gray.300"}
                fontFamily={"body"}
                fontSize={"sm"}
                textAlign={"center"}
              >
                26 de Maio de 2023
              </Text>
            </VStack>
            <VStack justifyContent={"center"}>
              <Text
                color={"gray.200"}
                fontFamily={"heading"}
                fontSize={"md"}
                textAlign={"center"}
              >
                Avaliação:
              </Text>
              <Text
                color={"gray.300"}
                fontFamily={"body"}
                fontSize={"sm"}
                textAlign={"center"}
              >
                8.6/10
              </Text>
            </VStack>
            <VStack>
              <Text
                color={"gray.200"}
                fontFamily={"heading"}
                fontSize={"md"}
                textAlign={"center"}
              >
                Nível:
              </Text>
              <Text
                color={"gray.300"}
                fontFamily={"body"}
                fontSize={"sm"}
                textAlign={"center"}
              >
                Elite
              </Text>
            </VStack>
          </HStack>

          <VStack px={"4"}>
            <HStack
              justifyContent={"space-between"}
              alignItems={"center"}
              pl={"6"}
            >
              <Icon as={Entypo} name="user" size={"2xl"} />
              <Text flex={1} color={"gray.300"} fontSize={"2xl"} pl={6}>
                Informações da conta
              </Text>
              <IconButton
                icon={<Icon as={Entypo} name="chevron-small-right" />}
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
                /* onPress={(e) => goToPage(e)} */
              />
            </HStack>
            <HStack
              justifyContent={"space-between"}
              alignItems={"center"}
              pl={"6"}
            >
              <Icon as={Entypo} name="time-slot" size={"2xl"} />
              <Text flex={1} color={"gray.300"} fontSize={"2xl"} pl={6}>
                Progresso do jogo
              </Text>
              <IconButton
                icon={<Icon as={Entypo} name="chevron-small-right" />}
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
                /* onPress={(e) => goToPage(e)} */
              />
            </HStack>
            <HStack
              justifyContent={"space-between"}
              alignItems={"center"}
              pl={"6"}
            >
              <Icon as={Entypo} name="credit-card" size={"2xl"} />
              <Text flex={1} color={"gray.300"} fontSize={"2xl"} pl={6}>
                Métodos de pagamento
              </Text>
              <IconButton
                icon={<Icon as={Entypo} name="chevron-small-right" />}
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
                /* onPress={(e) => goToPage(e)} */
              />
            </HStack>
            <HStack
              justifyContent={"space-between"}
              alignItems={"center"}
              pl={"6"}
            >
              <Icon as={MaterialIcons} name="settings" size={"2xl"} />
              <Text flex={1} color={"gray.300"} fontSize={"2xl"} pl={6}>
                Configurações
              </Text>
              <IconButton
                icon={<Icon as={Entypo} name="chevron-small-right" />}
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
                /* onPress={(e) => goToPage(e)} */
              />
            </HStack>
            <HStack
              justifyContent={"space-between"}
              alignItems={"center"}
              pl={"6"}
            >
              <Icon as={MaterialIcons} name="logout" size={"2xl"} />
              <Text flex={1} color={"gray.300"} fontSize={"2xl"} pl={6}>
                Sair
              </Text>
              <IconButton
                icon={<Icon as={Entypo} name="chevron-small-right" />}
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
                /* onPress={(e) => goToPage(e)} */
              />
            </HStack>
          </VStack>
        </ScrollView>
      </ImageBackground>
    </VStack>
  );
}
