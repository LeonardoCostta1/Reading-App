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
import { View } from "react-native";
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        console.log(uid);
        navigation.replace("Home");
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  async function entrar() {
    if (email && password) {
      await Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          navigation.replace("Home");
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
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
        <Signup onPress={() => entrar()}>
          <SignupText>Entar agora</SignupText>
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
