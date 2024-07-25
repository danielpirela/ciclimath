import { View, Text, Pressable, Image, useAnimatedValue, StyleSheet } from 'react-native'
import { Item, Question } from '@/types/data'
import { Loader } from './Loader'
import { BlurView } from 'expo-blur'
import {styled} from 'nativewind'
import { useEffect, useState } from 'react'
import { setRelationIdQuestion } from '@/services/setQuestions'
import { useAuthStore } from '@/store/authStore'
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'

const StyledPressable = styled(Pressable)

interface Props {
    data : Question | undefined
}

export function ItemScore({data} : Props) {

  const user = useAuthStore(state => state.user)
  const idQuestions = user.question

  useEffect(() => {
  }, [idQuestions])
  return (
    <>
    {
      data && idQuestions.includes(data.id) && (
        <BlurView intensity={90} key={data.id} className={`flex-1 justify-center items-center p-2 rounded-md my-2 w-[90vw] h-[500px] border-solid border-2 border-[#333]/90 ` }>
          <Text className='text-white pt-5 text-3xl font-semibold'>{data?.question}</Text>
          <Image source={{uri: data.image}}
          style={{
            width: 200,
            height: 200,
            resizeMode: 'contain'
          }}
          />
          <View className='flex-1 flex-row justify-center items-center gap-2'>
          {data.answers.map((answer, index) => {
            return (
              <StyledPressable
              disabled={true}
              className={`flex-1 justify-center flex-col items-center bg-gray-700/50 active:bg-white active:text-black w-[90px] h-[100px] rounded-full shadow-md shadow-white/30 ${data.correct === answer ? 'bg-green-600' : ''}`}
              >
                <Text key={String(index) + Math.random() * 10} className='text-white hover:text-gray-600 '>{answer}</Text>
              </StyledPressable>
            )
          })}
            </View>
          <View className='justify-center items-end min-w-full'>
            <Loader className="w-20 h-20"/>
          </View>
        </BlurView>
        )
      }
      </>
      )
}


