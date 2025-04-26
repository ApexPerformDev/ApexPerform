import {View, Image, ImageBackground, TextInput} from "react-native";
import icons from "../../constants/icons.js"
import {styles} from"./sing-up.style.js";
import Button from "../../components/button/button.jsx";


function SingUp(){
    return (
        <ImageBackground
            source={icons.background}
            style={styles.container} 
        >
            <View style={styles.containerLogo}>
                <Image source={icons.logo} style={styles.logo} />
            </View>

            <View >
                <TextInput placeholder="Nome" style={styles.LoginBox}/>
                <TextInput placeholder="E-mail" style={styles.LoginBox}/>
                <TextInput placeholder="Senha" style={styles.LoginBox} secureTextEntry={true}/>
                <Button text="Acessar"/>
            </View>
            
            <View>

            </View>
        </ImageBackground>
        
    );
}

export default SingUp;