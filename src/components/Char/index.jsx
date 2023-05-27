import { Image } from "react-native-svg";

import CHAR from '@assets/char-ex.png'

export function Char(){
  return(
    <Image
    w={"100"}
    h={"400"}
    source={CHAR}
    alt="Char"

  />
  )
}