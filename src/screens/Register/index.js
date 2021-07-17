import { useNavigation } from "@react-navigation/native";
import React,{useState} from "react";
import { View } from "react-native";
import Firebase from "../../Config";
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
    if(email&&password){
    // [START auth_signup_password]
    await Firebase
      .auth()
      .createUserWithEmailAndPassword(email.trim(), password.trim())
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;

        navigation.navigate('Home')

        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(error.code);
        // ..
      });
    // [END auth_signup_password]
    }else{
      alert('Favor preencher todos os campos!')
    }

  }

  return (
    <Container>
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
