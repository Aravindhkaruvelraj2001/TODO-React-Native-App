import React from 'react';
import { StyleSheet,Text,TouchableOpacity} from 'react-native';


export default function Deletetodo({item,pressHandler}){
    
    return(
        <TouchableOpacity onPress={()=>pressHandler(item.id)}>
            <Text style={styles.list}>{item.list}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    list:{
        margin:5,
        padding:5,
        fontSize:24,
        borderWidth:1,
        borderStyle:"dotted",
       backgroundColor:"#fff2b8",
      }
});