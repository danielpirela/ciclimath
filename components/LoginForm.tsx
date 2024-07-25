import { View, Text, TextInput, Button, Pressable } from 'react-native'
import {useForm, Controller} from 'react-hook-form'
import { BlurView } from 'expo-blur'
import { Loader } from './Loader'
import { useAuthStore } from '@/store/authStore'
import { getUser } from '@/services/getUser'
import { useState } from 'react'
import {  router } from 'expo-router'

export function LoginForm() {
    const setAuth = useAuthStore(state => state.setAuth)
    const setUser = useAuthStore(state => state.setUser)
    const [formError, setFormError] = useState<boolean>(false)
    const { control, handleSubmit, formState : {errors} } = useForm()


    const onSubmit = async (data:any) => {
        const res = await getUser(data.email)

        if(!res) {
            const user = {
                id: '',
                email: '',
                username: '',
                question: [],
            }
            setUser(user)
            setAuth(false)
            setFormError(true)
        }

        if (res.password === data.password) {
            const user = {
                id: res.id,
                email: res.email,
                username: res.username,
                question: [res.questionR],
            }
            setUser(user)
            setAuth(true)
            setFormError(false)
            router.replace('/questions')
        }}
        return (
            <View className='flex-1 border-2 border-solid border-black/50 rounded-lg max-h-[450px]  min-w-80 shadow-2xl'>

    <BlurView className='justify-center items-center w-full h-full' intensity={90}>
        <Loader className='w-32 h-32'/>
        <Controller
        name='email'
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
            <View>
            <Text className='text-white text-xl mx-2 px-1'>
                Email
            </Text>
            <TextInput
            className='text-white border-2 rounded-md border-[#333]/80 active:border-blue-500 min-w-[300px] bg-black/30 min-h-[50px] m-2 px-4'
            placeholder='enercusi@gmail.com'
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            />
            </View>
        )}
        />
        <Controller
        name='password'
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
            <View>
            <Text className='text-white text-xl mx-2 px-1'>
                Password
            </Text>
            <TextInput
            className='text-white opacity-100 border-2 rounded-md border-[#333]/80 active:border-blue-500 min-w-[300px] bg-black/30 min-h-[50px] m-2 px-1'
            placeholder='   ********'
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            />
            </View>
        )}
        />
        <View className='flex-1 justify-center items-start max-w-full w-full'>
            {   formError && (
                <Text className='text-red-500 ml-2'>username and password do not match</Text>
            )
            }
        </View>
      <Pressable className='flex-1 p-2 bg-black/50 rounded-lg w-[95%] h-auto justify-center items-center mb-4 active:bg-green-300' onPress={handleSubmit(onSubmit)}>
        <Text className='text-2xl font-bold p-1 text-white'>Submit</Text>
      </Pressable>
    </BlurView>
    </View>
  )
}
