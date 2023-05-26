import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";

import { Box, useTheme } from 'native-base';

import { Home } from "@screens/Home";
import { SignIn } from "@screens/SignIn";
import { Skin } from "@screens/Skin";

export function Routes() {

  const { colors } = useTheme();

  const theme = DefaultTheme;

  theme.colors.background = colors.gray[700];

  const Stack = createStackNavigator();
  
  return (
    <Box flex={1} bg="gray.600">
    <NavigationContainer theme={theme}>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
        
        <Stack.Screen
          name="skin"
          component={Skin}
        />

        <Stack.Screen
          name="home"
          component={Home}
        />
        
        <Stack.Screen
          name="signin"
          component={SignIn}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Box>
  );
}
