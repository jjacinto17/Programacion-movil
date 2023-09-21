import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            errorMessage: '',
        };
    }

    handleResetPassword = () => {
        // Aquí puedes agregar la lógica para restablecer la contraseña, como enviar un correo electrónico con un enlace de restablecimiento.
        // Si hay un error en el proceso de restablecimiento de contraseña, puedes establecer el mensaje de error en 'errorMessage'.
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
                    <Text style={styles.title}>Restablecer Contraseña</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Correo Electrónico"
                        onChangeText={(text) => this.setState({ email: text })}
                    />

                    <Text style={styles.errorText}>{this.state.errorMessage}</Text>

                    <TouchableOpacity style={styles.resetPasswordBtn} onPress={this.handleResetPassword}>
                        <Text style={styles.resetPasswordText}>Restablecer Contraseña</Text>
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
    resetPasswordBtn: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    resetPasswordText: {
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
