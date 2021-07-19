import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import Firebase from "../../Config";
import Headers from "../../Components/Headers";
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

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  async function asyncsignUpWithEmailPassword() {
    if (email && password) {
      // [START auth_signup_password]
      await Firebase.auth()
        .createUserWithEmailAndPassword(email.trim(), password.trim())
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;

          navigation.navigate("Home");

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
          // ..
        });
      // [END auth_signup_password]
    } else {
      alert("Favor preencher todos os campos!");
    }
  }

  return (
    <Container>
      <Headers/>
      <Logo>Cadastre-se</Logo>

      <View style={{ width: "100%" }}>
        <Input placeholder="E-mail" onChangeText={setEmail} value={email} />
        <Input
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
        />
        <Signup onPress={() => asyncsignUpWithEmailPassword()}>
          <SignupText>Entar agora</SignupText>
        </Signup>
      </View>
    </Container>
  );
};

export default Register;
