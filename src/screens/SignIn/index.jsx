import {
  Center,
  HStack,
  Icon,
  IconButton,
  Image,
  ScrollView,
  Text,
  VStack
} from 'native-base'

import { AuthContext } from '@contexts/AuthContext'

import { useNavigation } from '@react-navigation/native'

import { HomeSkin } from '@screens/HomeSkin'

import { useContext, useState } from 'react'

import { Entypo } from '@expo/vector-icons'

import { ImageBackground } from 'react-native'

/* import { api } from '@services/api' */
/* 
import signInData from '@services/auth' */

import Icone1 from '@assets/icon-home1.png'
import Icone2 from '@assets/icon-home2.png'
import Logo from '@assets/logo.svg'

import { Button } from '@components/Button'
import { InputForm } from '@components/Input'

export function SignIn() {

  
  const { login } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  /*   const toast = useToast()
  
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
    }); */
    
    function goBackHome() {
    navigation.goBack();
  }
  
  const navigation = useNavigation()
  
  async function handleSignIn() {
    
    const response = await login(username, password)

    console.log(response)

    navigation.navigate('homeskin');
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
          <HStack justifyContent={"flex-start"} alignItems={"center"} mb={"10"}>
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
            <Text
              color={"gray.100"}
              flex={1}
              textAlign={"center"}
              fontFamily={"heading"}
              fontSize={"3xl"}
            >
            
            </Text>
          </HStack>
          <Image
            source={Icone1}
            position={"absolute"}
            top={"180"}
            left={"0"}
            alt="Icone flutuante"
          />
          <Center>
            <Logo />
          </Center>
          <VStack flex={1} px={"12"} py={"8"}>
            <Center mt={"40"}>
              <InputForm
                placeholder="Login"
                value={username}
                onChangeText={(e) => setUsername(e)}
              />
              <InputForm
                placeholder="Senha"
                value={password}
                onChangeText={(e) => setPassword(e)}
                secureTextEntry
              />
              <Button
                title="ENTRAR"
                mt={"2"}
                variant={'outline'}
                onPress={handleSignIn}
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
