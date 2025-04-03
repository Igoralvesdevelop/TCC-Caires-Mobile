import { StyleSheet } from "react-native"
import { themas } from "../../global/themas";
export const Styles = StyleSheet.create({
    container:{
        flex: 1,
    
        backgroundColor:themas.colors.roxo
    },
    Box: {
        height: 500,
        width: 300,
        display: "flex",
        alignItems: 'center',
        
        backgroundColor: themas.colors.white,
        borderRadius: 20,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        
    },
    text:{
        top: 95,
        left: 10,
        color: themas.colors.white,
        fontSize: 18,
        textDecorationLine: "underline",
        fontWeight:"bold"
 },
 button:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 50,
    borderRadius: 15,
    top: 90,
    backgroundColor: '#0A9EDE', 
 },
 text1:{
    top: 15,
    left: -20,
    color: 'black',
    fontSize: 22,
   
    fontWeight:"bold"
},
   
})