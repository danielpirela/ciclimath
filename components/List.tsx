import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Item, Question } from '@/types/data'
import { ItemQuestion } from './ItemQuestion'
import { Loader } from './Loader'

interface Props {
  data : Question[]
}
export function List({data}: Props) {

    return (
    <>
      {
        data ? (
        <View>
        <FlatList
          className='flex-1 flex-col'
          data={data}
          renderItem={({ item: data } : Item) => <ItemQuestion data={data}/>}
          keyExtractor={(data: Question) => data.id}
          />
        </View>
        ): (
          <Loader className=' w-32 h-32'/>
        )
      }
      </>
    )
}
