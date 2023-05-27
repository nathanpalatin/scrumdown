import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '@screens/Home'
import { SignIn } from '@screens/SignIn'
import { AboutUs } from '@screens/AboutUs'

export function AuthRoutes() {

  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="signin" component={SignIn} />
      <Screen name="aboutus" component={AboutUs} />
      
    </Navigator>
  );
}
