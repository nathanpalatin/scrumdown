import { createStackNavigator } from '@react-navigation/stack'

import { Box } from 'native-base'

import { Home } from '@screens/Home'
import { SignIn } from '@screens/SignIn'
import { AboutUs } from '@screens/AboutUs'
import { Contact } from '@screens/Contact'

export function AuthRoutes() {

  const { Navigator, Screen } = createStackNavigator();

  return (
    <Box flex={1}>

    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="signin" component={SignIn} />
      <Screen name="aboutus" component={AboutUs} />
      <Screen name="contact" component={Contact} />
      
    </Navigator>
    </Box>
  );
}
