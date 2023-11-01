import React from "react";
import { TouchableOpacity, Text, StyleSheet,ActivityIndicator } from "react-native";

interface MyButtonProps {
  onPress: () => void;
  title: string;
  style: object;
  restProps: object;
  loader: boolean;
  teststyles:object;
  topper:string
}
export const MyButton = ({ onPress, title,style,restProps,loader,teststyles,topper}: MyButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container,style]} onPress={onPress} {...restProps}>
      {loader ? (
        <ActivityIndicator size={'small'} color='white' />
      ) : (
        <Text style={[styles.textSize,teststyles]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: "black",
    borderRadius: 8,
    justifyContent:'center',
    alignItems:'center'
    
  },
  text: { color: "white", fontSize: 16, fontWeight: "bold" },
  textSize:{
    fontSize:18,
    color:"white",
   
 }
});
