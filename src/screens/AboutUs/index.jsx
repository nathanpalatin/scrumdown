import { Text, Box, Center, Image, ScrollView } from 'native-base'
import { useRoute } from '@react-navigation/native'
import Game from '@assets/game.jpg'
import { Header } from '@components/Header'

import { ImageBackground } from 'react-native'

export function AboutUs({ navigation }) {
  const route = useRoute();
  return (
    <Box flex={1}>
      <ImageBackground
        source={require("@assets/background2.png")}
        style={{ flexGrow: 1 }}
        resizeMode="cover"
      >
        <Header navigation={navigation} route={route} />

        <Center px={"8"}>
          <Image
            w={"full"}
            h={"56"}
            style={{
              borderRadius: 6,
            }}
            source={Game}
            alt="Game"
            resizeMode="cover"
          />
        </Center>
        <ScrollView showsVerticalScrollIndicator={"false"}>
          <Text
            px={"8"}
            color={"gray.100"}
            fontSize={"2xl"}
            mt={"4"}
            textAlign={"justify"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            quisquam odit repellat itaque. Natus quasi ab vero fugiat aperiam
            libero! Pariatur eligendi atque exercitationem accusantium veritatis
            nostrum voluptatem ullam repellendus! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Saepe quisquam odit repellat itaque.
            Natus quasi ab vero fugiat aperiam libero! Pariatur eligendi atque
            exercitationem accusantium veritatis nostrum voluptatem ullam
            repellendus! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Saepe quisquam odit repellat itaque. Natus quasi ab vero
            fugiat aperiam libero! Pariatur eligendi atque exercitationem
            accusantium veritatis nostrum voluptatem ullam repellendus! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Saepe quisquam
            odit repellat itaque. Natus quasi ab vero fugiat aperiam libero!
            Pariatur eligendi atque exercitationem accusantium veritatis nostrum
            voluptatem ullam repellendus!
          </Text>
        </ScrollView>
      </ImageBackground>
    </Box>
  );
}
