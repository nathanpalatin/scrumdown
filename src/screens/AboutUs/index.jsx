import { Heading, Text, VStack } from "native-base";

export function AboutUs() {
  return (
    <VStack flex={1}>
      <Heading color={"gray.100"} fontSize={"4xl"} fontFamily={'heading'} mt={"24"} textAlign={"center"}>
        Sobre nós
      </Heading>
      <Text
        px={"8"}
        color={"gray.100"}
        fontSize={"lg"}
        mt={"24"}
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
    </VStack>
  );
}
