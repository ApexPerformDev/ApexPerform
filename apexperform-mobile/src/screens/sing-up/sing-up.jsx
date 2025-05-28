import { useState } from "react";
import {View, Image, ImageBackground, TextInput} from "react-native";
import icons from "../../constants/icons.js"
import {styles} from"./sing-up.style.js";
import Button from "../../components/button/button.jsx";
import api from "../../api/api";


function SingUp(){
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            await api.post("/user/register", {
                firstName,
                lastName,
                email,
                password
            })

            Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
        
    } catch (error){
        Alert.alert("Erro", "Não foi possivel cadastrar. Verifique os dados.")
    }
};

    return (
        <ImageBackground  source={icons.background} style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={icons.logo} style={styles.logo} />
            </View>

            <View >
                <TextInput 
                    placeholder="Nome" 
                    style={styles.LoginBox}
                    value={firstName}
                    onChangeText={setFirstName}
                />

                <TextInput 
                    placeholder="Sobrenome" 
                    style={styles.LoginBox}
                    value={lastName}
                    onChangeText={setLastName}
                />

                <TextInput
                    placeholder="E-mail" 
                    style={styles.LoginBox}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    placeholder="Senha" 
                    style={styles.LoginBox} 
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <Button text="Acessar" onPress={handleRegister}/>
            </View>

            <View>
                
            </View>
        </ImageBackground>
    );
}

export default SingUp;