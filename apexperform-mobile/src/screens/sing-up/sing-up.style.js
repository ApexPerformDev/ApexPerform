import { useState } from "react";
import { View, Image, ImageBackground, TextInput, Alert } from "react-native"; // Adicionado Alert aqui
import icons from "../../constants/icons.js";
import { styles } from "./sing-up.style.js";
import Button from "../../components/button/button.jsx";
import api from "../../api/api";

// 1. Receba a prop "navigation" aqui
function SingUp({ navigation }) { 
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            const dataUser = {
                firstname,
                lastname,
                email,
                password
            };

            // Sua chamada para a API continua a mesma
            const { data } = await api.post("users/register", dataUser);

            console.log("RESPONSE", JSON.stringify(data));

            // 2. Substitua o Alert.alert pela navegação para a tela de sucesso
            navigation.navigate('CadastroSucesso');

        } catch (error) {
            console.log(error.message);
            Alert.alert("Erro", "Não foi possível cadastrar. Verifique os dados.");
        }
    };

    return (
        <ImageBackground source={icons.background} style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={icons.logo} style={styles.logo} />
            </View>

            <View>
                <TextInput
                    placeholder="Nome"
                    style={styles.LoginBox}
                    value={firstname}
                    onChangeText={setFirstName}
                />

                <TextInput
                    placeholder="Sobrenome"
                    style={styles.LoginBox}
                    value={lastname}
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

                {/* No seu código, o nome do componente é "Button", e não "MeuBotao" */}
                <Button text="Cadastrar" onPress={handleRegister} />
            </View>

            <View>
                {/* Espaço adicional, se necessário */}
            </View>
        </ImageBackground>
    );
}

export default SingUp;