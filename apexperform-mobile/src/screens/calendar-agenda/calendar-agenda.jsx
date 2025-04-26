import { FlatList, Text, View } from "react-native";
import {styles} from "./calenda-agenda.style.js"
import { appointments } from "../../constants/data.js"
import Appointment from "../../components/appointment/appointment.jsx";

function CalendarAgenda(){
    return <View style={styles.container}>
        <Text style={styles.text}>Agende suas reuniões com o seu gestor</Text>

        <FlatList data={appointments}  
                  keyExtractor={(appoint) => appoint.id_appointment}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => {
                    return <Appointment gestor={item.gestor}/>
                            
                  }}
                  />
    </View>
}

export default CalendarAgenda;