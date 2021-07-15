import React from "react";
import Title from "../../Components/Title";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {
  Container,
  TopContainer,
  Category,
  ContainerCategory,
  SeeAll,
  ContainerBooks,
  BoxBooks,
  Book,
  BookDescriptionContainer,
  TitleBook,
  Author,
  StarContainer,
  StarRate,
  InfoContainer,
  TimeStudy
} from "./styles";
import { View } from "react-native";

const Home = () => {
  return (
    <Container>
      <TopContainer>
        <Title text="Hello" />
        <Ionicons name="search" size={24} color="black" />
      </TopContainer>

      <InfoContainer>
      <Category>Study time today</Category>
      <View style={{flexDirection:"row"}}>
      <Ionicons name="time-outline" size={24} color="black" />
      <TimeStudy>{""} 2:23:25</TimeStudy>
      </View>
   
      </InfoContainer>

      <ContainerCategory>
        <Category>Level A1</Category>
        <SeeAll>SeeAll</SeeAll>
      </ContainerCategory>

      <ContainerBooks>
        <BoxBooks>
          <Book></Book>
          <BookDescriptionContainer>
              <TitleBook>Meet on the back of mars</TitleBook>
              <Author>Leonardo Costa</Author>
              <StarContainer>
              <Entypo name="star" size={20} color="#FFDF10" />
              <StarRate>4.9</StarRate>
              </StarContainer>
          </BookDescriptionContainer>
        </BoxBooks>

        <BoxBooks>
          <Book></Book>
          <BookDescriptionContainer>
              <TitleBook>Meet on the back of mars</TitleBook>
              <Author>Leonardo Costa</Author>
              <StarContainer>
              <Entypo name="star" size={20} color="#FFDF10" />
              <StarRate>4.9</StarRate>
              </StarContainer>
          </BookDescriptionContainer>
        </BoxBooks>
      </ContainerBooks>
    </Container>
  );
};

export default Home;
