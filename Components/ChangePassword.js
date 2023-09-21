import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
            errorMessage: '',
        };
    }

    handleChangePassword = () => {
        // Aquí puedes agregar la lógica para cambiar la contraseña, como enviar los datos a un servidor.
        // Si hay un error al cambiar la contraseña, puedes establecer el mensaje de error en 'errorMessage'.
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
                    <Text style={styles.title}>Cambiar Contraseña</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña Actual"
                        secureTextEntry
                        onChangeText={(text) => this.setState({ currentPassword: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Nueva Contraseña"
                        secureTextEntry
                        onChangeText={(text) => this.setState({ newPassword: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirmar Contraseña"
                        secureTextEntry
                        onChangeText={(text) => this.setState({ confirmPassword: text })}
                    />

                    <Text style={styles.errorText}>{this.state.errorMessage}</Text>

                    <TouchableOpacity style={styles.changePasswordBtn} onPress={this.handleChangePassword}>
                        <Text style={styles.changePasswordText}>Cambiar Contraseña</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.handleLogin}>
                        <Text style={styles.linkText}>Volver al Inicio de Sesión</Text>
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
    changePasswordBtn: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    changePasswordText: {
        color: 'white',
        fontWeight: 'bold',
    },
    linkText: {
        marginTop: 10,
        color: '#007BFF',
        textDecorationLine: 'underline',
    },
});

export default ForgotPassword;
