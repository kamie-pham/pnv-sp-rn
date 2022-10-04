import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { navigate } from '../navigation'
type Props = {}

function HomeScreen({}: Props) {
  useEffect(() => {
  }, [])
  

  return (
    <View>
        <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen