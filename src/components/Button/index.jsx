import { Button as ButtonNativeBase, Text } from "native-base";

export function Button({ title, variant, active, ...rest }) {
  return (
    <ButtonNativeBase
      bg={variant === "outline" ? 'yellow.500' : 'transparent'}
      w={"33"}
      rounded={"full"}
      h={14}
      borderWidth={variant === "outline" ? 1 : 0 }
      borderColor={variant === "outline" ? "yellow.500" : "none"}
      _pressed={{
    
        bg: 'transparent'                                                     
      }}
      {...rest}
    >
      <Text
        color={active ? 'gray.100' : 'gray.300' && variant === "outline" ? 'gray.800' : 'gray.300'}
        fontFamily={"body"} fontSize={'lg'}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
