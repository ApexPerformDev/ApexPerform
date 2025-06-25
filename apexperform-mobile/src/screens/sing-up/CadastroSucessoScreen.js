
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CadastroSucessoScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        }, 2000); // 2000 milissegundos = 2 segundos

        // Limpa o timer se o componente for desmontado
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Cadastrado com sucesso! ✅</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default CadastroSucessoScreen;