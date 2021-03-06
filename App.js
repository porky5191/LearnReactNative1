// ======================== Learning about Layout =========================

import { StatusBar } from 'expo-status-bar';
import { View, FlatList, Text, Button } from 'react-native';
import React, {useState, useEffect} from 'react'
import GoalList from './components/GoalList';
import GoalInput from './components/GoalInput';
import colors from './res/values/colors'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAdMode, setIsAdMode] = useState(false)
  
  //add an item to the list
  const addGoals = goalTitle => {
    setCourseGoals(currentGoals =>[...currentGoals,  
      {id: Math.random().toString(), value: goalTitle}])
      setIsAdMode(false)
  }

  //remove an items from the list
  const removeGoals = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id != goalId)
    })
  }

  return (
    <View style={{marginTop: 55, paddingLeft: 15, paddingRight: 15}}>
      <Button title='Add Goals' onPress={() => setIsAdMode(true)}/>
      <GoalInput onAddGoal={addGoals} show={isAdMode}/>

      {/* <Text style={{fontSize: 20, fontStyle: 'italic', color: colors.primaryDark, alignSelf: 'center'}}> 
      Total count is: </Text> */}

      {/** If we want to use our own key name than we can use KeyExtractor field
       * keyExtractor={(item, index) => item.custom_key_name}
       */}
      <FlatList keyExtractor={(item, index) => item.id} data={courseGoals} renderItem={
        itemData => (<GoalList id={itemData.item.id} onDelete={removeGoals} title={itemData.item.value}/>
      )}/>

      <StatusBar style="auto" />
    </View>
  );
}