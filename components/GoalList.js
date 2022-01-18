//=================== CUSTOM COMPONENTS TO BE USED IN FILES ==============================

import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { TouchableNativeFeedback } from 'react-native-web'
import colors from '../res/values/colors'
/** For touchable items (clickable)
 * TouchableOpacity: shows the clicking event, also let use set the activeOpacity={0.8} -> how strong the effect is
 * TouchableHighlight: Effect is shown as color
 * TouchableNativeFeedback (only works on android): Ripple Effect
 * TouchableWithoutFeedback : doesn't show any feedback
 */

const GoalList = props => {
    return (
        // Touchable helps us to register any touch event occuring
        <TouchableOpacity underlayColor={colors.green} onPress={props.onDelete.bind(this, props.id)} activeOpacity={0.8}>
            <View on>
                <Text style={styles.listItem}>
                {props.title}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default GoalList
