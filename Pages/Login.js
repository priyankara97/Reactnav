import { View, Text, Button } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
      <Button onPress={()=>{navigation.navigate('Home')}} title='Login'></Button>
    </View>
  )
}

export default Login