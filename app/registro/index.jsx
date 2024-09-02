import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
    input:{
        width:'80%',
        margin:'auto',
        backgroundColor:'lightgray',

    }

})

export default SignUp = () => {
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    
    const registrarUsuário = function () {
        if (!nome || !email || !senha){
        console.log(nome, email, senha)
        return
    }
    const resposta = fetch('https://taskhub-s37f.onrender.com/auth/signup',{
        method:'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({name: nome, email: email, password: senha})

    })
        
    }

    return(
        <SafeAreaView>
            <View>
                <Text>Registre-se</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText= {(text) => setEmail(text)}
                    value={email}
                    placeholder='Insira seu Email'

                />
                <TextInput
                    style={styles.input}
                    onChangeText= {(text) => setNome(text)}
                    value={nome}
                    placeholder='Insira seu Nome'

                />
                <TextInput
                    style={styles.input}
                    onChangeText= {(text) => setSenha(text)}
                    value={senha}
                    placeholder='Insira sua Senha'
                    secureTextEntry={true}
                />
                
            </View>
            <View>
                <Pressable onPress={registrarUsuário}>
                    <Text>Cadastrar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}   


