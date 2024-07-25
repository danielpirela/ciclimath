import { ImageBackground,View } from 'react-native'
import { BlurView } from 'expo-blur'
import { Redirect} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'

import { useAuthStore } from '@/store/authStore'
import { getQuestions } from '@/services/getQuestions'
import { Question } from '@/types/data'
import { ListScore } from '@/components/ListScore'
import { Loader } from '@/components/Loader'
const  bg  = require('../../assets/images/bg.jpg')

export default function HomeScreen() {
  const [questions, setQuestions] = useState<Question[]>()
  const auth = useAuthStore(state => state.isLogged)
  const user = useAuthStore(state => state.user)


  if(!auth) return <Redirect href="/login" />

  useEffect(() => {
    const getData = async () => {
      const questions = await getQuestions()
      if(Array.isArray(questions)) {
        setQuestions(questions)
      }
    }
    getData()
  },[])

  useEffect(() => {
    const getData = async () => {
      const questions = await getQuestions()
      if(Array.isArray(questions)) {
        setQuestions(questions)
      }
    }
    getData()
  },[user.question])

  return (
    <View className='flex-1 justify-center items-center min-w-full min-h-screen'>
      <ImageBackground source={bg} resizeMode='cover' className='min-h-screen min-w-full justify-center items-center'>
      <BlurView intensity={30} className='flex-1 justify-center items-center min-w-full min-h-screen'>
        <View className='mb-32'>
          {questions ? (
            <ListScore data={questions}/>
          ): (
            <View className='flex-1 justify-center items-center'>
            <Loader className='w-64 h-64'/>
            </View>
        )
        }
        </View>
      </BlurView>
      </ImageBackground>
    </View>
  )
}
