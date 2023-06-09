import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, ImageBackground } from "react-native";

import { Guns } from "@screens/Guns";
import { SkinList } from "@screens/SkinList";
import { HomeSkin } from "@screens/HomeSkin";
import { Profile } from "@screens/Profile";

import SkinListSvg from "@assets/skin-list.svg";
import HomeSkinSvg from "@assets/home-skin.svg";
import GunsSvg from "@assets/guns-menu.svg";
import ProfileSvg from "@assets/profile.svg";

import { View, useTheme } from "native-base";

export function AppRoutes() {

  const { Navigator, Screen } = createBottomTabNavigator();

  const { sizes } = useTheme();

  const IconSize = sizes[8];

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("@assets/bg-bottom-menu.png")}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 0,
          width: "100%",
          height: 96,
        }}
        resizeMode="cover"
      />
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            zIndex: 2,
            backgroundColor: "transparent",
            borderTopWidth: 0,
            height: Platform.OS === "android" ? "auto" : 96,
            paddingBottom: sizes[10],
            paddingTop: sizes[6],
          },
        }}
      >
        <Screen
          name="homeskin"
          component={HomeSkin}
          options={{
            tabBarIcon: ({ color }) => (
              <HomeSkinSvg fill={color} width={IconSize} height={IconSize} />
            )
          }}
        />
        <Screen
          name="skinslist"
          component={SkinList}
          options={{
            tabBarIcon: ({ color }) => (
              <SkinListSvg fill={color} width={IconSize} height={IconSize} />
            ),
          }}
        />

        <Screen
          name="guns"
          component={Guns}
          options={{
            tabBarIcon: ({ color }) => (
              <GunsSvg fill={color} width={`38`} height={IconSize} />
            ),
          }}
        />

        <Screen
          name="profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <ProfileSvg fill={color} width={IconSize} height={IconSize} />
            ),
          }}
        />
      </Navigator>
    </View>
  );
}
