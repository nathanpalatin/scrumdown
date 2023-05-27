import { Heading, Text, VStack,Center, Image, ScrollView } from 'native-base'

import Logo from '@assets/logo.svg'
import Game from '@assets/game.jpg'

export function AboutUs() {
  return (
    <VStack flex={1} pb={12}>
      <Heading
        color={"gray.100"}
        fontSize={"4xl"}
        fontFamily={"heading"}
        m={"16"}
        textAlign={"center"}
        >
        Sobre nós
      </Heading>
      <Center px={'8'}>
        <Logo />
        <Image
        w={"full"}
        mt={'12'}
        h={"56"}
        style={{
          borderRadius: 16
      }}
        source={Game}
        alt="Game"
        
        
        resizeMode="cover"
        />
      </Center>
      <ScrollView>
      <Text
        px={"8"}
        color={"gray.100"}
        fontSize={"lg"}
        mt={"12"}
        textAlign={"justify"}
        >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quisquam
        odit repellat itaque. Natus quasi ab vero fugiat aperiam libero!
        Pariatur eligendi atque exercitationem accusantium veritatis nostrum
        voluptatem ullam repellendus! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Saepe quisquam odit repellat itaque. Natus quasi ab
        vero fugiat aperiam libero! Pariatur eligendi atque exercitationem
        accusantium veritatis nostrum voluptatem ullam repellendus! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Saepe quisquam odit
        repellat itaque. Natus quasi ab vero fugiat aperiam libero! Pariatur
        eligendi atque exercitationem accusantium veritatis nostrum voluptatem
        ullam repellendus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Saepe quisquam odit repellat itaque. Natus quasi ab vero fugiat
        aperiam libero! Pariatur eligendi atque exercitationem accusantium
        veritatis nostrum voluptatem ullam repellendus!
        
      </Text>
    </ScrollView>
    
    </VStack>
  );
}
