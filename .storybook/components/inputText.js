import React, { useState } from 'react';
import { TextInput,StyleSheet,View,TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import {Feather} from 'react-native-vector-icons'
export const Input = ({
  style,
  value,
  show,
  name,
  size,
  onChangeText,
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  onFocus,
  onBlur,
  numberOfLines,
  maxLength,
  color,
  ...props
}) => {
    const [state, setState] = useState(true)
    const [hidePass, setHidePass] = useState(true);
    const handleHide = () => {
        setHidePass(!hidePass);
      };
  return (
<View style={styles.mainView}>
<View style= {styles.checkBox}>
{state == true ? (
     <MaterialIcons
       name={name}
       size={size}
       color={color}
     />
    ) : (
      <MaterialIcons name="check-box" size={26} color="#26c6da" />
    )}
</View>
<View>
<TextInput
      style={[styles.input,style]}
      onFocus={onFocus}
      onBlur={onBlur}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={hidePass}
      numberOfLines={numberOfLines}
      maxLength={maxLength}
    />
</View>
   {show ? <TouchableOpacity style={styles.starView} onPress={handleHide}>
   <Feather
          name={hidePass ? "eye-off" : "eye"}
          size={24}
          color={state !== true ? "#eee" : "#26c6da"}
        />
   </TouchableOpacity> :null}
    
    </View>
   
  );
};
const styles = StyleSheet.create({
    mainView:{
        height:55,
        width:'90%',
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10
    },
    input:{
        height:55,
        width:300,
        paddingHorizontal:15,
    },
    checkBox:{
       height:55,
       width:35,
       paddingHorizontal:5,
       justifyContent:'center',
       alignItems:'center',

    },
    starView:{
       justifyContent:'center',
       alignItems:'center'
    }

})
