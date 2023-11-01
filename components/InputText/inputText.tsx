import React, { useState } from 'react';
import { TextInput,StyleSheet,View,TouchableOpacity } from 'react-native';
import { MaterialIcons,Feather} from "@expo/vector-icons";

interface InputProps {
    onFocus: () => void;
    onBlur: () => void;
    onChangeText: () => void;
    title: string;
    value: string;
    style: object;
    placeholder:string;
    restProps: object;
    loader: boolean;
    teststyles:object;
    topper:string
    placeholderTextColor:string;
    numberOfLines:number;
    maxLength:number;
    show:boolean;
    name:string;
    secureTextEntry:boolean;
    size:number;
    color:string
  }
export const Input = ({
  style,
  value,
  // show,
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
} : InputProps) => {
    const [state, setState] = useState(true)
    const [show,setShow] = useState(true)
    const [hidePass, setHidePass] = useState(true);
    const handleHide = () => {
        setHidePass(!hidePass);
      };
  return (
<View style={styles.mainView}>
<View style= {styles.checkBox}>
{state == true ? (
     <MaterialIcons
       name='check-box'
       size={26}
       color={'black'}
     />
    ) : (
      <MaterialIcons name="check-box" size={size} color={color} />
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
        width:'100%',
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'purple'
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
