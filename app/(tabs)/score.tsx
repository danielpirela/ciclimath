import { useAuthStore } from '@/store/authStore'
import { BlurView } from 'expo-blur'
import { Redirect } from 'expo-router'
import { View, Text, ScrollView, ImageBackground, StatusBar, FlatList } from 'react-native'
const  bg  = require('../../assets/images/bg.jpg')

export default function score() {
  const auth = useAuthStore(state => state.isLogged)
  if(!auth) return <Redirect href="/login" />

  return (
    <View className='min-h-screen'>
       <ImageBackground source={bg} resizeMode='cover' className='min-h-screen min-w-full justify-center items-center'>
       <BlurView intensity={30} className='flex-1 justify-center items-center min-w-full min-h-screen'>
        <Text>holas</Text>
        </BlurView>
      </ImageBackground>
    </View>
  )
}
