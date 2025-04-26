import { Image, Text, TouchableOpacity, View } from "react-native";
import {styles} from "./gestor.style"


function Gestor(props){
    return <TouchableOpacity style={styles.gestor}>
        <Image source={props.icon} style={styles.photo}/>
        
        <View>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.cargo}>{props.cargo}</Text>
        </View>
        
    </TouchableOpacity>
}

export default Gestor;