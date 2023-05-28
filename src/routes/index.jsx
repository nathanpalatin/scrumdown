import { useContext } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { Box, useTheme } from 'native-base'

import { AuthContext } from '@contexts/AuthContext'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const { colors } = useTheme()
  const { user } = useContext(AuthContext)

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.gray[850],
    },
  };

  return (
    <Box flex={1} bg={'gray.700'}>
      <NavigationContainer theme={theme}>
      {user ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    
    </Box>
  );
}
