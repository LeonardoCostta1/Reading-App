import styled from "styled-components";
import { Dimensions } from "react-native";
export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #fff;
`;
export const Scroll = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: "center",
    paddingBottom: 50,
    flexDirection: "column",
    width: "97%",
    marginTop:12,
  }
}))``;
export const Header = styled.View`
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  flex-direction: row;

`;

export const ButtonBack = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;
export const Author = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #777;
`;
export const TextBooks = styled.Text`
  font-size: 14px;
  line-height: 22px;
  color: #777;
  text-align: justify;
`;

export const TextTime = styled.Text`
  font-size: 10px;
  line-height: 22px;
  color: #777;
`;
export const BookCover = styled.View`
  height: 140px;
  width: 100px;
  background-color: #FA6400;
  margin-bottom: 20px;
`;
export const PlayerContainer = styled.View`
  height: 50px;
  width: 100%;

  /* position: absolute;
  bottom: 0; */
  background: #fff;
  align-self: center;
  border: 1px solid #ddd;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  /* padding-left: 10px; */
  margin-bottom: 15px;
  border-radius: 10px;
`;

export const LeftArea = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 65%;
`;

export const RightArea = styled.View`
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  width: 30%;
`;

export const TranslateButton = styled.TouchableOpacity`
  height: 35px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const ButtonQuizArea = styled.TouchableOpacity`
  height: 80px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ButtonQuiz = styled.View`
  height: 45px;
  width:85%;
  justify-content: center;
  align-items: center;
  background-color: #FA6400;
  border-radius: 5px;

`;
