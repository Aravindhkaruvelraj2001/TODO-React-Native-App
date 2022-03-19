import React,{useState} from 'react';
import { StyleSheet,View,TextInput,Button } from 'react-native';

export default function Addtodo({submitHandler}){

    const [getInput,setInput]=useState('');

    const changeHandler=(val)=>{
        setInput(val);
    }

    return(
        <View>
            <TextInput style={styles.input}
            placeholder='New Todo....'
            onChangeText={(t)=>changeHandler(t)}
            />
            <Button onPress={()=>submitHandler(getInput)} title='Add Todo' color='orange'/>
        </View>
    )

}
const styles=StyleSheet.create({
   input:{
        margin:20,
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:10,
        borderBottomWidth:2,
        borderBottomColor:'#ddd',
    },
});