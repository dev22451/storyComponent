import React from 'react';
import {TouchableOpacity, ActivityIndicator,Text,StyleSheet} from 'react-native';

export const ButtonComponent = ({
  title,
  onPress,
  style,
  titleStyle,
  loader,
  textColor,
  teststyles,
  fontSize,
  
  ...restProps
}) => {
  return (
    <TouchableOpacity style={[styles.container,style]} onPress={onPress} {...restProps}>
      {loader ? (
        <ActivityIndicator size={'small'} color={Color.white} />
      ) : (
        <Text style={[styles.textSize,teststyles]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    container:{
        height:60,
        width:360,
        borderRadius:15,
        backgroundColor:"#26c6da",
        justifyContent:'center',
        alignItems:'center'
    },
    textSize:{
       fontSize:18,
       color:"white"
    }
})
