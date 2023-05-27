import { FormControl, Input as NativeBaseInput } from "native-base";

export function InputForm({ errorMessage = null, isInvalid, ...rest }) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={"3"}>
      <NativeBaseInput
        bg={"gray.400"}
        px={4}
        h={12}
        autoCapitalize={"none"}
        
        borderWidth={0}
        fontSize="lg"
        color="gray.100"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 2,
          borderColor: "red.600",
        }}
        fontFamily="body"
        _focus={{
          bg: "gray.400",
          borderColor: "green.500",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
