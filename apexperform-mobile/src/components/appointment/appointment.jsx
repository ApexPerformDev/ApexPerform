import { Image, Text, View } from "react-native";
import {styles} from "./appointment.styles";
import icon from "../../constants/icons.js";
import Button from "../button/button.jsx";

function Appointment(props){
    return <View style={styles.appointment}>
        <Text style={styles.gestor}>{props.gestor}</Text>
        <Text>{props.booking_date}</Text>

        <View style={styles.container}>
            <View style={styles.containerBooking}>
                <View style={styles.booking}>
                    <Image style={styles.icon} source={icon.calendar} />
                    <Text style={styles.bookingDate}>31/01/2025</Text>
                </View>
                <View style={styles.booking}>
                    <Image style={styles.icon} source={icon.clock} />
                    <Text style={styles.bookingHour}>10:00h</Text>
                </View>
            </View>
            <View styles={styles.containerButton}>
                <Button text="cancelar Reunião" theme="danger" />
            </View>
        </View>
    </View>
}

export default Appointment;