import { Center, Image, View, Text, VStack } from "native-base";

import { useRoute } from "@react-navigation/native";

import Icone1 from "@assets/icon-home1.png";
import Icone2 from "@assets/icon-home2.png";

import { ImageBackground } from 'react-native'

import { Button } from "@components/Button";
import { Header } from "@components/Header";

export function Home({ navigation }) {
  const route = useRoute();

  function startNow(){
    navigation.navigate('signin')
  }

  return (
    <View flex={1}>
    <ImageBackground
    source={require("@assets/background2.png")}
    style={{ flexGrow: 1 }}
    resizeMode="cover"
  > 
      <VStack flex={1} px={"8"}>
      
        <Header navigation={navigation} route={route} />

        <Text color={"#fff"} fontSize={"xxl"} mt={'8'} textAlign={`center`}>
          List de Skins – Todos os Personagens e Roupas!
        </Text>
        <Text color={"#71808C"} fontSize={"xl"} mt={"6"} textAlign={"center"}>
          Se você está procurando uma lista completa de todos os Skins, então
          você veio ao lugar certo.
        </Text>
        <Center>
          <Button
         
            title="COMEÇAR AGORA"
            mt={"10"}
            variant={"outline"}
            onPress={(e) => startNow(e)}
          />
        </Center>
        <Image
          w={"full"}
          h={"56"}
          source={Icone1}
          alt="Icon1"
          position={"absolute"}
          top={680}
          left={-80}
          resizeMode="contain"
        />
        <Image
          w={"full"}
          h={"40"}
          source={Icone2}
          alt="Icon2"
          position={"absolute"}
          top={660}
          right={-100}
          resizeMode="contain"
        />
      </VStack>
    
    </ImageBackground>
  </View>
  );
}
