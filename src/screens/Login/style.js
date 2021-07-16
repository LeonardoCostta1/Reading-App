import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  paddingHorizontal: 50px;
  padding-top: 100px;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.Text`
  font-size: 40px;
`;
export const Signup = styled.TouchableOpacity`
  flex-direction: row;
  height: 50px;
  background: #000;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;
export const SignupText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const RegisterText = styled.Text`
  font-size: 12px;
  text-transform: capitalize;
`;

export const RegisterTextBold = styled.Text`
  font-size: 12px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Input = styled.TextInput`
  font-size: 12px;
  border: 1px solid #bbb;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 5px;
  paddingHorizontal: 20px;
`;

export const RegisterButton = styled.TouchableOpacity`
  flex-direction: row;
  height: 50px;
`;

