import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { Item, Question } from '@/types/data';
import { ItemQuestion } from './ItemQuestion';
import { Loader } from './Loader';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import { useAuthStore } from '@/store/authStore'

interface Props {
  data: Question[];
}

export function List({ data }: Props) {

  const user = useAuthStore(state => state.user)
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withRepeat(
      withSequence(
        withTiming(-10, { duration: 1000 }),
        withTiming(10, { duration: 1000 })
      ),
      -1, // Infinite repeat
      true // Reverse the animation direction on each repeat
    )
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <>
      {
        data && user.question.length < 18 ? (
          <View>
            <FlatList
              className='flex-1 flex-col'
              data={data}
              renderItem={({ item: data }: { item: Question }) => <ItemQuestion data={data} />}
              keyExtractor={(data: Question) => data.id}
            />
          </View>
        ) : (
          <View className='flex-1 justify-center items-center'>
            <Loader className='w-64 h-64'/>
          <Animated.View
            style={[ animatedStyle]}
            className='bg-black/50 rounded-lg max-w-xs max-h-16 px-2 py-1 boder-1 border-solid'
            >
            <Text className='text-md text-white px-2 py-1 font-semibold'>Ya respondiste todas las preguntas correctamente, ve a la tu puntuación</Text>
          </Animated.View>
          </View>
        )
      }
    </>
  );
}
