import {LoginForm} from '@/components/LoginForm'
import { BlurView } from 'expo-blur'
import { ImageBackground, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const  bg  = require('../../assets/images/bg.jpg')
export default function login() {
  return (
    <ImageBackground source={bg} resizeMode='cover' className='min-h-screen min-w-full justify-center items-center'>
      <StatusBar barStyle='light-content' />
    <BlurView className='flex-1 justify-start items-center min-w-full min-h-screen pt-32' intensity={50}>
      <SafeAreaView>
        <LoginForm/>
      </SafeAreaView>
      </BlurView>
    </ImageBackground>
  )
}
