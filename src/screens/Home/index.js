import React, { useEffect, useState, useContext } from "react";
import Title from "../../Components/Title";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { database } from "../../Config";
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
  TimeStudy,
  Scroll
} from "./styles";
import { View } from "react-native";
import BookContext from "../../Provider";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [books, setBooks] = useState([]);
  const { book, setBook } = useContext(BookContext);

  const navigation = useNavigation();

  const seeBook = (title, text, author, stars) => {
    setBook({
      title,
      text,
      author,
      stars
    });

    navigation.navigate("Book");
  };

  useEffect(() => {
    database.collection("Books").onSnapshot((query) => {
      const list = [];
      query.forEach((element) => {
        list.push({ ...element.data(), id: element.id });
      });

      setBooks(list);
    });
  }, []);
  return (
    <Container>
      <Scroll showsVerticalScrollIndicator={false}>
        <TopContainer>
          <Title text="Hello" />
        </TopContainer>

        <InfoContainer>
          <Category>Study time today</Category>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="time-outline" size={24} color="black" />
            {/* <TimeStudy>{""} 2:23:25</TimeStudy> */}
          </View>
        </InfoContainer>

        <ContainerCategory>
          <Category>Level A1</Category>
          <SeeAll>SeeAll</SeeAll>
        </ContainerCategory>

        <ContainerBooks>
          {books.map((item) => {
            return (
              <BoxBooks
                key={item.id}
                onPress={() =>
                  seeBook(item.title, item.text, item.author, item.stars)
                }
              >
                <Book></Book>
                <BookDescriptionContainer>
                  <TitleBook>{item.title}</TitleBook>
                  <Author>{item.author}</Author>
                  <StarContainer>
                    <Entypo name="star" size={20} color="#FFDF10" />
                    <StarRate>{item.stars}</StarRate>
                  </StarContainer>
                </BookDescriptionContainer>
              </BoxBooks>
            );
          })}
        </ContainerBooks>
      </Scroll>
    </Container>
  );
};

export default Home;
