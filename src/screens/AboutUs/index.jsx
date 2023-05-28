import { Text, Box, Center, Image, ScrollView } from 'native-base'
import { useContext } from 'react'
import { useRoute } from '@react-navigation/native'
import Game from '@assets/game.jpg'
import { Header } from '@components/Header'



import { ImageBackground } from 'react-native'

export function AboutUs({ navigation }) {

  const route = useRoute();
  return (
    <Box flex={1} >
      <ImageBackground
        source={require("@assets/background2.png")}
        style={{ flexGrow: 1 }}
        resizeMode="cover"
      >
        <Header navigation={navigation} route={route} />
<ScrollView showsVerticalScrollIndicator={"false"} contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }} >
        <Center px={"8"}>
          <Image
            w={"full"}
            h={"56"}
            style={{
              borderRadius: 6,
            
            }}
            source={Game}
            alt="Game"
            resizeMode="cover"
          />
         
        </Center>
        
          <Text
            px={"8"}
            color={"gray.100"}
            fontSize={"2xl"}
            mt={"4"}
           
          >
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            quisquam odit repellat itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            quisquam odit repellat itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            quisquam odit repellat itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            quisquam odit repellat itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            quisquam odit repellat itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            quisquam odit repellat itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            quisquam odit repellat itaque. 
          </Text>
        </ScrollView>
      </ImageBackground>
    </Box>
  );
}
