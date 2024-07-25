import { View, Text, Pressable, Image, useAnimatedValue } from 'react-native'
import { Item, Question } from '@/types/data'
import { Loader } from './Loader'
import { BlurView } from 'expo-blur'
import {styled} from 'nativewind'
import { useEffect, useState } from 'react'
import { setRelationIdQuestion } from '@/services/setQuestions'
import { useAuthStore } from '@/store/authStore'

const StyledPressable = styled(Pressable)

interface Props {
    data : Question | undefined
}

interface IsCorrect {
  value: boolean
  answer: number
  id: string
}
export function ItemQuestion({data} : Props) {

  const user = useAuthStore(state => state.user)
  const idQuestions = user.question
  const [idRealation, setIdRealation] = useState<string[]>([])

  const initialState = {

    value: false,
    answer: 0,
    id: '',
  }

  const [isCorrect, setIsCorrect] =  useState<IsCorrect>(initialState)
  const [isDisable, setDisable] = useState<boolean | null | undefined>(false)

  const handleCorrectAnswer = (quest: Question , answer :  number) => {
    if (quest?.correct === answer) {
      setIsCorrect({
      value: true,
      answer,
      id: quest.id
    })

    setRelationIdQuestion(user.id, quest.id)
  }
    else setIsCorrect({
      value: false,
      answer,
      id: quest.id
    })
    setDisable(true)
  }

  useEffect(() => {
    if (idQuestions && idRealation) setIdRealation([...idQuestions])
  },[])




  return (
      data ?
        <BlurView intensity={90} key={data.id} className='flex-1 justify-center items-center p-2 rounded-md my-2 w-[90vw] h-[340px] border-solid border-2 border-[#333]/90'>
          <Text className='text-white pt-5 text-3xl font-semibold'>Cual seria el resultado de {data?.question} ?</Text>
          <View className='flex-1 flex-row justify-center items-center gap-2'>
          {data.answers.map((answer, index) => {
            console.log(idRealation)

            return (
              <StyledPressable
                disabled={isDisable || idRealation.includes(data.id)}
                className={`flex-1 justify-center flex-col items-center bg-gray-700/50 active:bg-white active:text-black w-20 h-24 rounded-full ${isCorrect.value === true && isCorrect.id === data.id && answer === isCorrect.answer && idRealation.includes(data.id) ? 'bg-green-600' : ''}`}
                onPress={() => handleCorrectAnswer(data, answer)}
              >
                <Text key={String(index) + Math.random() * 10} className='text-white hover:text-gray-600 '>{answer}</Text>
              </StyledPressable>
            )
          })}
            </View>
          <View className='justify-center items-end min-w-full'>
            <View className='flex-row justify-between items-center min-w-full'>
            {isCorrect.value === true && isCorrect.id === data.id && <Text  className='text-green-500'> Respuesta correcta</Text>}
            {isCorrect.value=== false && isCorrect.id === data.id && <Text className='text-red-500'> Respuesta incorrecta</Text>}
            <Loader className="w-20 h-20"/>
            </View>
          </View>
        </BlurView>:(
          <View className='flex-1 justify-center items-center'>
          <Loader className="w-64 h-64"/>
          </View>
        )
    )
}
