import {View, Image, ImageBackground, TextInput, Alert} from "react-native";
import icons from "../../constants/icons.js"
import {styles} from"./login.style.js";
import Button from "../../components/button/button.jsx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import api from "../../api/api";

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!email.trim() || !password.trim()){
            Alert.alert ("Erro", "Por favor, insira um e-mail válido")
            return
        }

        try {
            const response = await api.post("/users/sessions",{
                email,
                password,
            });

            const {token, refreshToken} = response.data;

            await AsyncStorage.setItem("token", token);
            await AsyncStorage.setItem("refreshToken", refreshToken)

            Alert.alert("Sucesso", "Login realizado!");

        } catch (error){
            console.error(error);
            Alert.alert("Erro", "E-mail ou senha inválida.");
        }
    }
 
    return (
        <ImageBackground
            source={icons.background}
            style={styles.container} 
        >
            <View 
            style={styles.containerLogo}>
                <Image source={icons.logo} style={styles.logo} />
            </View>

            <View >
                <TextInput
                placeholder="E-mail"
                style={styles.LoginBox}
                value={email}
                onChange={setEmail}
                keyboardType="Email-adress"
                autoCapitalize="none"
                />

                <TextInput
                placeholder="Senha"
                style={styles.LoginBox}
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                />
                
                <Button text="Acessar" onPress={handleLogin} />
            </View>
            
            <View>

            </View>
        </ImageBackground>
        
    );
}

export default Login;