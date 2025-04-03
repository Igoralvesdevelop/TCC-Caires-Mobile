import React from "react";
import {Button, Text, TouchableOpacity, View} from 'react-native'
import { Styles } from "./style";
export default function Control(){
    return(
        <View style={Styles.container}>
            <Text style={Styles.text}>Controle de visitantes permanentes</Text>
            <View style={Styles.Box}>
            <Text style={Styles.text1}>Visitantes Permanentes Cadastrados :</Text>
               <TouchableOpacity style={Styles.button}>
                    <Text>Zaradir</Text>

               </TouchableOpacity>
                
            </View>
        </View>
    )



}