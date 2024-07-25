
import { HomeIcon, LogginIcon, LogoutIcon } from '@/components/ui/Icons'
import { useAuthStore } from '@/store/authStore'
import {Link, Stack } from 'expo-router';
import { useEffect } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
const  logo = require('../assets/images/pngwing.com.png')


export default function RootLayout() {

  const auth = useAuthStore(state => state.isLogged)
  const setAuth = useAuthStore(state => state.setAuth)


  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{
          headerStyle: { backgroundColor: '#333'},
          headerTitleStyle: { color: 'transparent'},
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          title: 'Home',
          headerLeft : () => (
            <View className='flex-row justify-start items-center gap-2 bg-[#333]'>
              <Image source={logo}  className='w-10 h-10'/>
              <Text className='font-bold text-white text-[28px] text-center'>Ciclimath</Text>
            </View>
          ),
          headerRight: () => (
            <>
            {
              auth ? (
                <Pressable onPress={() => setAuth(false)}>
                  <LogoutIcon name="lock-open" size={24} color="white"/>
                </Pressable>
              ) :  (
                <Link href={'/login'}>
                  <LogginIcon name="lock" size={24} color="white"/>
                </Link>
                )
            }
            </>
            )
        }}
        />
        <Stack.Screen name="(auth)/login" options={{
          title: 'Login',
          headerStyle: { backgroundColor: '#333'},
          headerTitleStyle: { color: 'white'},
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerRight: () => (
            <Link href={'/'}>
              <HomeIcon name="home" size={24} color="white"/>
            </Link>
          )
        }}/>

        <Stack.Screen name="(auth)/register" options={{
          title: 'Register',
          headerStyle: { backgroundColor: '#333'},
          headerTitleStyle: { color: 'white'},
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerRight: () => (
            <Link href={'/'}>
              <HomeIcon name="home" size={24} color="white"/>
            </Link>
          )
        }}/>
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
