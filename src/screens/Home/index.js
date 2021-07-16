import React, { useEffect, useState, useContext } from "react";
import Title from "../../Components/Title";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);

import Firebase from "../../Config";
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
import { TouchableOpacity, View } from "react-native";
import BookContext from "../../Provider";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [books, setBooks] = useState([]);
  const { book, setBook } = useContext(BookContext);
  const navigation = useNavigation();

  useEffect(() => {
    let unmounted = false;

    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (!unmounted) {
          var uid = user.uid;
          console.log(uid);
        }
      } else {
        navigation.navigate("Login");
      }
    });

    Firebase.firestore()
      .collection("Books")
      .onSnapshot((query) => {
        const list = [];
        query.forEach((element) => {
          list.push({ ...element.data(), id: element.id });
        });
        setBooks(list);
      });
    return () => {
      unmounted = true;
    };
  }, []);

  const seeBook = (title, text, author, stars) => {
    setBook({
      title,
      text,
      author,
      stars
    });

    navigation.navigate("Book");
  };

  const exit = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <Container>
      <Scroll showsVerticalScrollIndicator={false}>
        <TopContainer>
          <Title text="Hello" />
          <TouchableOpacity on onPress={() => exit()}>
            <Ionicons name="exit-outline" size={24} color="black" />
          </TouchableOpacity>
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
