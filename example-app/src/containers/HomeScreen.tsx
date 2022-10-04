import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { navigate } from '../navigation'
type Props = {}
import { useSelector, useDispatch } from 'react-redux';
import { exampleRequested } from '../redux/actions/lobbyActions';

function HomeScreen({}: Props) {
  const dispatch = useDispatch();
  const exampleValue = useSelector((state: any) => state.lobby.exampleValue);


  useEffect(() => {
    dispatch(exampleRequested());
  }, [])
  useEffect(() => {
    console.warn('exampleValue', exampleValue)
  }, [exampleValue])
  
  
  return (
    <View>
        <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen