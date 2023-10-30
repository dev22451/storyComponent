
import { StyleSheet, TextInput, View,TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const Task = ({
  task:  id, state, title,
}) =>  {
    const onArchiveTask = () =>{}
    const onPinTask = () => {}
  return (
    <View style={styles.listItem}>
        <View style= {styles.mainView}>
       <TouchableOpacity  onPress={() => onArchiveTask(id)}>
        {state !== "TASK_ARCHIVED" ? (
          <MaterialIcons
            name="check-box-outline-blank"
            size={24}
            color="#26c6da"
          />
        ) : (
          <MaterialIcons name="check-box" size={24} color="#26c6da" />
        )}
      </TouchableOpacity>
      <TextInput
        placeholder="write something here!!"
        value={title}
        editable={true}
        style={styles.inputBox}
      />
      <TouchableOpacity onPress={() => onPinTask(id)}>
        <MaterialIcons
          name="star"
          size={24}
          color={state !== "TASK_PINNED" ? "#eee" : "#26c6da"}
        />
      </TouchableOpacity>
      </View>
      <View style= {styles.mainView}>
       <TouchableOpacity  onPress={() => onArchiveTask(id)}>
        {state !== "TASK_ARCHIVED" ? (
          <MaterialIcons
            name="check-box-outline-blank"
            size={24}
            color="#26c6da"
          />
        ) : (
          <MaterialIcons name="check-box" size={24} color="#26c6da" />
        )}
      </TouchableOpacity>
      <TextInput
        placeholder="write something here!!"
        value={title}
        editable={false}
        style={styles.inputBox}
      />
      <TouchableOpacity onPress={() => onPinTask(id)}>
        <MaterialIcons
          name="star"
          size={24}
          color={state !== "TASK_PINNED" ? "#eee" : "#26c6da"}
        />
      </TouchableOpacity>
      </View>
      <View style= {styles.mainView}>
       <TouchableOpacity  onPress={() => onArchiveTask(id)}>
        {state !== "TASK_ARCHIVED" ? (
          <MaterialIcons
            name="check-box-outline-blank"
            size={24}
            color="#26c6da"
          />
        ) : (
          <MaterialIcons name="check-box" size={24} color="#26c6da" />
        )}
      </TouchableOpacity>
      <TextInput
        placeholder="write something here!!"
        value={title}
        editable={false}
        style={styles.inputBox}
      />
      <TouchableOpacity onPress={() => onPinTask(id)}>
        <MaterialIcons
          name="star"
          size={24}
          color={state !== "TASK_PINNED" ? "#eee" : "#26c6da"}
        />
      </TouchableOpacity>
      </View>
    </View>
  );
};
export const styles = StyleSheet.create({
    listItem: {
      justifyContent:'center',
      alignItems:'center',
      flex: 1,
      width:'100%',
      backgroundColor: "#87CEEB",
      borderWidth:1,
      marginVertical:40
    },
    mainView:{
        height:80,
        width:'80%',
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"white",
        borderRadius:10,
        marginVertical:40
    },
    inputBox:{
        height:60,
        width:'70%',
        paddingHorizontal:10
    }
});