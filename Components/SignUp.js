import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            errorMessage: '',
        };
    }

    handleRegister = () => {
        // Aquí puedes agregar la lógica para registrar al usuario, como enviar los datos a un servidor.
        // Si hay un error en el registro, puedes establecer el mensaje de error en 'errorMessage'.
    };

    handleLogin = () => {
        this.props.navigation.navigate('Login');
    };

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('./src/logo.png')}
                    style={styles.imageLogo}
                />

                <View style={styles.formContainer}>
                    <Text style={styles.title}>Registro</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        onChangeText={(text) => this.setState({ username: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        placeholder="Contraseña"
                        onChangeText={(text) => this.setState({ password: text })}
                    />

                    <Text style={styles.errorText}>{this.state.errorMessage}</Text>

                    <TouchableOpacity style={styles.registerBtn} onPress={this.handleRegister}>
                        <Text style={styles.registerText}>Registrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.handleLogin}>
                        <Text style={styles.linkText}>Ya tengo una cuenta. Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5D95FC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageLogo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 80,
    },
    formContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        elevation: 5,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 20,
    },
    registerBtn: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    registerText: {
        color: 'white',
        fontWeight: 'bold',
    },
    linkText: {
        marginTop: 10,
        color: '#007BFF',
        textDecorationLine: 'underline',
    },
});

export default Register;
