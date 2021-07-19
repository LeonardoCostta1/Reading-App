import React, { useEffect } from "react";
import {
  Container,
  Logo,
  Signup,
  SignupText,
  RegisterText,
  RegisterTextBold,
  Input,
  RegisterButton
} from "./style";
import { useNavigation } from "@react-navigation/native";
import Firebase from "../../Config";
import { View,Text } from "react-native";
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [uid, setUid] = React.useState("");

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        navigation.replace("Home");
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  },[]);

  async function entrar() {
    if (email && password) {
      await Firebase.auth()
        .signInWithEmailAndPassword(email.trim(), password.trim())
        .then((userCredential) => {
          // Signed i
          var user = userCredential.user;
          navigation.replace("Home");
          // ...
        })
        .catch((error) => {
          var mensagemErro = "";
          var errorCode = error.code;
          var errorMessage = error.message;

          if (errorCode == "auth/weak-password") {
            mensagemErro = "A senha precisa ter no minimo 6 caracteres";
          } else if (errorCode == "auth/expired-action-code") {
            mensagemErro = "Cogido de ação expirou";
          } else if (errorCode == "auth/invalid-action-code") {
            mensagemErro = "código de ação for inválido";
          } else if (errorCode == "auth/user-disabled") {
            mensagemErro = "usuario desabilitado";
          } else if (errorCode == "auth/user-not-found") {
            mensagemErro = "Usuario não cadastrado";
          }
          alert(mensagemErro);
        });
    } else {
      alert("Favor Preencher Todos os Campos");
    }
  }

  return (
    <Container>
      <Logo>Reading App</Logo>

      <View style={{ width: "100%" }}>
        <Input placeholder="E-mail" onChangeText={setEmail} value={email} />
        <Input
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
        />
        <Signup onPress={()=>entrar()}>
          <SignupText>Entrar</SignupText>
        </Signup>
      </View>
      

      <RegisterButton onPress={() => navigation.navigate("Register")}>
        <RegisterText>dont have an account? </RegisterText>
        <RegisterTextBold>Register now</RegisterTextBold>
      </RegisterButton>
    </Container>
  );
};

export default Login;
