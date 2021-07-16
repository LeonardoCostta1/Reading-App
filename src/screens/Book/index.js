import React, { useContext } from "react";
import {
  Container,
  Title,
  TextBooks,
  Author,
  BookCover,
  Scroll,
  Header,
  PlayerContainer
} from "./style";

import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import BookContext from "../../Provider";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { secondsToMinutes } from "../../Services/secondsToMinutes";
const Book = () => {
  const [sound, setSound] = React.useState();

  const [playIcon, setPlayIcon] = React.useState("play");
  const [duration, setDuration] = React.useState();

  const [current, setCurrent] = React.useState(0.2);

  const [isPlaying, setisPlaying] = React.useState();
  const sign = useContext(BookContext);
  const navigation = useNavigation();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../musica.mp3")
    );
    setSound(sound);
    console.log("Playing Sound");
    if (!isPlaying) {
      sound.playAsync();
      setPlayIcon("pause");
    } else {
      sound.pauseAsync();
      setPlayIcon("play");
    }
    console.log(isPlaying)
    sound.getStatusAsync().then((item) => {
      setDuration(item.durationMillis);
      setisPlaying(item.isPlaying);
    });
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  function seekTime(value) {
    sound.setPositionAsync(value);
  }

  return (
    <>
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
      <PlayerContainer>
        <TouchableOpacity onPress={() => playSound()}>
          <FontAwesome name={playIcon} size={18} color="black" />
        </TouchableOpacity>
        <Slider
          style={{ width: 250, height: 40 }}
          minimumValue={current}
          maximumValue={duration}
          step={1}
          minimumTrackTintColor="#FFDF10"
          maximumTrackTintColor="#000000"
          thumbTintColor="#FFDF10"
          onValueChange={(value) => seekTime(value)}
        />
        <TextBooks>00:00 / {secondsToMinutes(duration * 0.001)}</TextBooks>
      </PlayerContainer>
    </>
  );
};

export default Book;
