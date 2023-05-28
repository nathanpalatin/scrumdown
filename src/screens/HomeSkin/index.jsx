import { useContext } from 'react'
import { HStack, ScrollView, Text, Image, VStack, Center } from 'native-base'

import { AuthContext } from '@contexts/AuthContext'

import { ImageBackground } from 'react-native'
import Logo from '@assets/logo-min.svg'

export function HomeSkin() {

  const { user, logout } = useContext(AuthContext);

  return (
    <ScrollView>
      <VStack flex={1}>
        <HStack
          mt={16}
          justifyContent={"space-between"}
          mb={"4"}
          pr={"4"}
          px={`8`}
          alignItems={"center"}
        >
          <Image
            source={require("@assets/nathan.png")}
            size={"xs"}
            alt={"ola"}
            rounded={"full"}
            resizeMode="cover"
          />
          <Text color={"gray.100"} fontSize={"3xl"} fontFamily={"heading"}>
            Home
          </Text>
          <Logo />
        </HStack>
        <ImageBackground
          source={require("@assets/bg-character-home.png")}
          style={{ flex: 1 }}
          resizeMode="cover"
        >
      
        </ImageBackground>
      </VStack>
      <Text fontSize={'lg'} fontFamily={'heading'} color={'gray.100'}>Bem-vindo, {user?.name}</Text>
    </ScrollView>
  );
}
