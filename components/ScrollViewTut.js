import React from 'react'
import {ScrollView} from 'react-native'

function ScrollViewTut() {
    return (
        <ScrollView>
        {courseGoals.map(goal => <Text style={styles.text} key={goal}>{goal}</Text>)}
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: "#FFA679",
        paddingVertical: 20,
        paddingHorizontal: 20,
        textAlign: "center",
        borderWidth: 1,
        borderColor: colors.primaryDark,
        marginVertical: 5
      }
})

export default ScrollViewTut
