import { View, Text, TextInput, Button, Pressable } from 'react-native'
import {useForm, Controller} from 'react-hook-form'
import { BlurView } from 'expo-blur'
import { Loader } from './Loader'
import { useAuthStore } from '@/store/authStore'
import { getUser } from '@/services/getUser'
import { useState } from 'react'
import {  Link, router } from 'expo-router'
import { createUser } from '@/services/createUser'
import { PostgrestError } from '@supabase/supabase-js'

export function RegisterForm() {
    const [formError, setFormError] = useState<boolean>(false)
    const { control, handleSubmit, formState : {errors} } = useForm()
    const [isCreated, setIsCreated] = useState(false)

    console.log(errors.email)
    const onSubmit = async (data:any) => {
        const res  = await createUser(data)
        if(res?.error || res.hola) {
            setFormError(true)
            return
        }
        setFormError(false)
        setIsCreated(true)

    }

        return (
        <View className='flex-1 border-2 border-solid border-black/50 rounded-lg max-h-[550px]  min-w-80 shadow-2xl'>
        <BlurView className='justify-center items-center w-full h-full' intensity={90}>
        <Loader className='w-32 h-32'/>
        <Controller
        name='email'
        rules={{
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        }}
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
        name='username'
        rules={{
            required: true,
        }}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
            <View>
            <Text className='text-white text-xl mx-2 px-1'>
                Username
            </Text>
            <TextInput
            className='text-white border-2 rounded-md border-[#333]/80 active:border-blue-500 min-w-[300px] bg-black/30 min-h-[50px] m-2 px-4'
            placeholder='nercusi_d'
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            />
            </View>
        )}
        />
        <Controller
        name='password'
        rules={{
            required: true,
        }}
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
            <Link href={'/register'} className='ml-2 w-full'>
            <Text className='text-white'>You already have an account ? </Text>
            <Text className='text-blue-500 font-semibold'>Login</Text>
            </Link>
            {   formError && (
                <Text className='text-red-500 ml-2 mt-1'>Could not create account,
                check the details</Text>
            )
            }
            {   errors.email || errors.username || errors.password ? (
                <Text className='text-red-500 ml-2 mt-1'>Check data</Text>
            ) : null
            }
            {   isCreated && (
                <Text className='text-green-500 ml-2 mt-1'>Account was created</Text>
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
