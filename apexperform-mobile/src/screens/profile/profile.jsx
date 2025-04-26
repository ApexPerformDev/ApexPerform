import { Text, View } from "react-native";
import { styles } from "./profile.styles";

function Profile(){
    return <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.title}>Nome</Text>
            <Text style={styles.text}>Danz Souza</Text>
        </View>

        <View style={styles.item}>
            <Text style={styles.title}>E-mail</Text>
            <Text style={styles.text}>danielsouza179@gmail.com</Text>
        </View>

    </View>
}

export default Profile;