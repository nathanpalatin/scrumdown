import { Button as ButtonNativeBase, Text } from "native-base";

export function Button({ title, variant, ...rest }) {
  return (
    <ButtonNativeBase
      bg={variant === "outline" ? "transparent" : "yellow.700"}
      w={"33"}
      rounded={"full"}
      h={14}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor={variant === "outline" ? "#FFF000" : "none"}
      _pressed={{
        bg: variant === "outline" ? "gray.600" : "yellow.100",
      }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "gray.100" : "gray.800"}
        fontFamily={"heading"}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
