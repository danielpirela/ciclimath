import { HomeIcon, QuestionIcon, ScoreIcon } from '@/components/ui/Icons'
import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native'
export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff' ,
        tabBarStyle: {
          backgroundColor: '#333',
          paddingVertical: 10,
          paddingHorizontal: 16,
        }
      }}
      >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <HomeIcon name="home" size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="score"
        options={{
          title: 'Score',
          tabBarIcon: ({ color }) => (
            <ScoreIcon name="award" size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="questions"
        options={{
          title: 'Questions',
          tabBarIcon: ({ color }) => (
            <QuestionIcon name="question" size={24} color={color} />
          )
        }}
      />
    </Tabs>
  )
}
