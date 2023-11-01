import React from 'react';
import {TouchableOpacity, ActivityIndicator,Text,StyleSheet,View} from 'react-native';

interface CardProps {
    onPress: () => void;
    title: string;
    style: object;
    restProps:object;
    textStyleOuter:object
  } 

export const Card = ({
  title,
  onPress,
  style,
  textStyleOuter,
  ...restProps
} : CardProps ) => {
  return (
    <TouchableOpacity style={[styles.container,style]} onPress={onPress} {...restProps}>
    <Text style={[styles.textStyle,textStyleOuter]}>Testing Cards</Text>
    <Text style={[styles.textStyle,textStyleOuter]}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    container:{
        height:250,
        width:360,
        borderRadius:15,
        backgroundColor:"#26c6da",
        justifyContent:'center',
        alignItems:'center'
    },
    textSize:{
       fontSize:18,
       color:"white"
    },
    textStyle:{
        fontSize:20,
        color:"white"
    }
})
