import { HStack, IconButton, CloseIcon, Box, Alert, Text, VStack } from "native-base";
import Logo from "@assets/logo-min.svg";

export function Guns() {
  return (

       
      <VStack flex={1}>
        <HStack
          mt={16}
          justifyContent={"space-between"}
          mb={"4"}
          pr={"4"}
          px={`8`}
          alignItems={"center"}
        >
      
          <Text  color={"gray.100"} fontSize={'4xl'} fontFamily={"heading"}>
            Armas
          </Text>
          <Logo />
        </HStack>

      </VStack>

  );
}
