import { ImageBackground, Text, View, Pressable, StatusBar} from 'react-native'
import {styled} from 'nativewind'
import { BlurView } from 'expo-blur'
import { Link } from 'expo-router'

import { Loader } from '@/components/Loader'
const  bg  = require('../../assets/images/bg.jpg')


const StyledPressable = styled(Pressable)
export default function index() {
  return (
    <ImageBackground source={bg} resizeMode='cover' className='min-h-screen min-w-full justify-center items-center'>
      <StatusBar barStyle='light-content' />
    <BlurView className='flex-1 justify-center items-center min-w-full min-h-screen' intensity={50}>
      <View className='justify-center items-center'>
      <Loader className="w-64 h-64"/>
      <Link href={'/questions'} asChild>
      <StyledPressable
        className='w-32 h-16 justify-center items-center bg-[#333]/50 border-1 border-[#333] rounded-lg shadow-xl active:bg-black/70'>
        <Text className='text-white text-center text-bold text-xl'>Play</Text>
      </StyledPressable>
      </Link>
      </View>
    </BlurView>
    </ImageBackground>
  )
}
