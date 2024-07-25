import { ImageBackground, Text, View, Pressable, StatusBar} from 'react-native'
import {styled} from 'nativewind'
import { BlurView } from 'expo-blur'
import { Link } from 'expo-router'

import { Loader } from '@/components/Loader'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated'
import { useEffect } from 'react'
const  bg  = require('../../assets/images/bg.jpg')


const StyledPressable = styled(Pressable)

export default function index() {

  const translateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withRepeat(
      withSequence(
        withTiming(-10, { duration: 1000 }),
        withTiming(10, { duration: 1000 })
      ),
      -1, // Infinite repeat
      true // Reverse the animation direction on each repeat
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    }
  })


  return (
    <ImageBackground source={bg} resizeMode='cover' className='min-h-screen min-w-full justify-center items-center'>
      <StatusBar barStyle='light-content' />
    <BlurView className='flex-1 justify-center items-center min-w-full min-h-screen' intensity={50}>
      <View className='justify-center items-center'>
      <Loader className="w-64 h-64"/>
      <Animated.View
      style={[animatedStyle]}
      className='shadow-lg shadow-red-800'
      >
      <Link href={'/questions'} asChild >
      <StyledPressable
        className='w-32 h-16 justify-center items-center bg-[#333]/50 border-1 border-[#333] rounded-lg  active:bg-black/70'>
        <Text className='text-white text-center text-bold text-xl'>Play</Text>
      </StyledPressable>
      </Link>
      </Animated.View>
      </View>
    </BlurView>
    </ImageBackground>
  )
}
