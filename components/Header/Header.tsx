import React, { useState } from 'react';
import { TextInput,StyleSheet,View,TouchableOpacity,Text } from 'react-native';
import { MaterialIcons,Feather} from "@expo/vector-icons";


interface HeaderProps {
    onPress: () => void;
    name: string;
    size: number;
    title: string;
    color:string;
    leftIcon:boolean;
    leftSize:boolean;
    restProps:object;
    outermidStyle:object;
    outerletStyle:object;
    outerrightStyle:object;
    outercontainerStyle:object
}
export const Header = ({
    name,
    size,
    color,
    title,
    onPress,
    restProps,
    outermidStyle,
    outerletStyle,
    outerrightStyle,
    outercontainerStyle,
}:HeaderProps) => {
    return (
        <View style={[styles.mainconatiner,outercontainerStyle]}>
          <View style={[styles.leftView,outerletStyle]}>
          <MaterialIcons
           name='check-box'
           size={26}
           color='#26c6da'
        />
         </View> 
          <TouchableOpacity style={[styles.midView,outermidStyle]} onPress={onPress} {...restProps}>
            <Text style={styles.text}>{title}</Text>
            </TouchableOpacity> 
          <View style={[styles.rightView,outerrightStyle]}> 
          <MaterialIcons
           name='star'
           size={26}
           color={'#26c6da'}
        /></View> 
        </View>
    )

}
const styles = StyleSheet.create({
    mainconatiner:{
        height:60,
        width:360,
        borderWidth:1,
        flexDirection:'row',
    },
    leftView:{
        flex:1,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
    },
    midView:{
        flex:3,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
    },
    rightView:{
        flex:1,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:18,
        fontWeight:'bold'
    }
})
