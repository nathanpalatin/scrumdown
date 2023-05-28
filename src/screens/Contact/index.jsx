import { View } from 'native-base'

import { Header } from '@components/Header'
import { useRoute } from '@react-navigation/native'

import { ImageBackground } from 'react-native'

export function Contact({ navigation }) {
  const route = useRoute();

  return (
    <View flex={1}>
      <ImageBackground
        source={require("@assets/background2.png")}
        style={{ flexGrow: 1 }}
        resizeMode="cover"
      >
        <Header navigation={navigation} route={route} />
      </ImageBackground>
    </View>
  );
}
