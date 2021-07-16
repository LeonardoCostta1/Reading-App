import React, { useContext } from "react";
import {
  Container,
  Title,
  TextBooks,
  Author,
  BookCover,
  Scroll,
  Header
} from "./style";
import { Entypo } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
import BookContext from "../../Provider";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Book = () => {
  const sign = useContext(BookContext);

  const navigation = useNavigation();
  return (
    <Container>
      <Scroll showsVerticalScrollIndicator={false}>
        <Header>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </Header>

        <BookCover></BookCover>
        <Title>{sign.book.title}</Title>
        <Author>{sign.book.author}</Author>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <Entypo name="star" size={20} color="#FFDF10" />
          <Entypo name="star" size={20} color="#FFDF10" />
          <Entypo name="star" size={20} color="#FFDF10" />
          <Entypo name="star" size={20} color="#FFDF10" />
          <Entypo name="star" size={20} color="#ccc" />
          {/* <Author>{sign.book.stars}</Author> */}
        </View>

        <TextBooks>{sign.book.text}</TextBooks>
      </Scroll>
    </Container>
  );
};

export default Book;
