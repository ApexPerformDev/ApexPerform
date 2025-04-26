import { FlatList, Text, View } from "react-native";
import {styles} from "./home.style.js"
import {gestores} from "../../constants/data.js"
import Gestores from "../../components/gestor/gestor.jsx"

function home(){
    return <View style={styles.container}>
        <Text style={styles.text}>Agende suas reuniões com o seu gestor</Text>

        <FlatList data={gestores}  
                  keyExtractor={(gestor) => gestor.id_gestor}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => {
                    return <Gestores name={item.name}
                            cargo={item.cargo}
                            icon={item.icon}
                            />

                  }}
                  />
    </View>
}

export default home;