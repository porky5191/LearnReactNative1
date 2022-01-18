import { StyleSheet } from "react-native-web";
import colors from "./colors";

export default StyleSheet.create({
    root: {
        paddingTop: 15,
        paddingBottom: 15
      },
      viewCenter: {
        flexDirection: 'center-reverse', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 30
      },
      textInput: {
        borderColor: colors.primaryDark,
        borderWidth: 5,
        padding: 10,
        width: 1000,
        padding: 25,
        margin: 25
      },
      text: {
        padding: 10,
        alignSelf: 'center',
        fontSize:25,
        textShadowColor: 'white',
        backgroundColor: colors.lightGrey,
        textDecorationColor: 'white',
        fontStyle: 'italic',
        padding: 25
      },
      button: {
        backgroundColor: colors.primary
      },
      textPadding: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: "#FFA679",
        paddingVertical: 20,
        paddingHorizontal: 20,
        textAlign: "center"
    }
});