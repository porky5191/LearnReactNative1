import React, {useState} from 'react'
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native'
import colors from '../res/values/colors'

const GoalInput = props => {
    const [enteredGoal, setGoals] = useState('This is my first app')

    return (
        <Modal visible={props.show} animationType='fade'>
            <View style={styles.root}>
                <TextInput placeholder='Enter Something' 
                    style={styles.Input}
                    onChangeText={txt => setGoals(txt)}/>
                <View style={styles.button}>
                    <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} color={colors.green}/> 
                    {/* Using this bind method we can pass argument to any method*/}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    Input: {
        borderColor: 'red',
        borderWidth: 3, 
        padding: 10
    },
    root: {
        padding: 20, 
        flexDirection: 'column', 
        // alignItems: 'center', 
        justifyContent: 'center',
        flex: 1
    },
    button: {
        paddingTop: 15,
        width: '60%',
        alignSelf: 'center'
    }
})

export default GoalInput