import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMessage: '',
        };
    }

    handleLogin = () => {
       
    };

    handleRegister = () => {
        this.props.navigation.navigate('Register');
    };

    handleForgotPassword = () => {
        this.props.navigation.navigate('ForgotPassword');
    };

    handleChangePassword = () => {
      this.props.navigation.navigate('ChangePassword');
  };


    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('./src/logo.png')}
                    style={styles.imageLogo}
                />

                <View style={styles.formContainer}>
                    <Text style={styles.title}>Login</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        onChangeText={(text) => this.setState({ username: text })}
                    />
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        placeholder="Password"
                        onChangeText={(text) => this.setState({ password: text })}
                    />

                    <Text style={styles.errorText}>{this.state.errorMessage}</Text>

                    <TouchableOpacity style={styles.loginBtn} onPress={this.handleLogin}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.handleRegister}>
                        <Text style={styles.linkText}>Crear cuenta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.handleForgotPassword}>
                        <Text style={styles.forgotPasswordText}>Olvidé mi contraseña</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.handleChangePassword}>
                        <Text style={styles.changePasswordText}>Cambiar mi contraseña</Text>
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
    loginBtn: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
    },
    linkText: {
        marginTop: 10,
        color: '#007BFF',
        textDecorationLine: 'underline',
    },
    forgotPasswordText: {
        marginTop: 10,
        color: '#007BFF',
        textDecorationLine: 'underline',
    },
    changePasswordText: {
      marginTop: 10,
      color: '#007BFF',
      textDecorationLine: 'underline',
  },
});

export default Login;
