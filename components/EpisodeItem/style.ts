import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
    },
    Image:{
        height: 75,
        aspectRatio:16/9,
        resizeMode: 'cover',
        borderRadius:5
    },
    container:{
        flex: 1,
        padding: 5,
        justifyContent: 'center'
    },
    title:{

    },
    duration:{
        color: 'darkgrey',
        fontSize: 19
    },
    plot:{
        color: 'darkgrey'
    }
})

export default styles;