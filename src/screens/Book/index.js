import React, { useContext } from "react";
import {
  Container,
  Title,
  TextBooks,
  Author,
  BookCover,
  Scroll,
  PlayerContainer,
  LeftArea,
  RightArea,
  TranslateButton,
  Header,
  TextTime,
  ButtonBack,
  ButtonQuiz,
  ButtonQuizArea
} from "./style";

import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text, Button } from "react-native";
import Slider from "@react-native-community/slider";
import BookContext from "../../Provider";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { secondsToMinutes } from "../../Services/secondsToMinutes";
const Book = () => {
  const [sound, setSound] = React.useState();
  const [playIcon, setPlayIcon] = React.useState("play");
  const [duration, setDuration] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [isPlaying, setisPlaying] = React.useState();

  const [translate, setTranslate] = React.useState(false);
  const bookInfo = useContext(BookContext);

  const navigation = useNavigation();
  async function playSound() {
    // console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      { uri: bookInfo.book.audio },
      { shouldPlay: true }
    );
    setSound(sound);
    // console.log("Playing Sound");
    if (!isPlaying) {
      sound.playAsync();
      setPlayIcon("pause");
    } else {
      sound.pauseAsync();
      setPlayIcon("play");
    }
    console.log(isPlaying);
    sound.getStatusAsync().then((item) => {
      setDuration(item.durationMillis);
      setisPlaying(item.isPlaying);
    });

    setInterval(() => {
      sound.getStatusAsync().then((item) => {
        setCurrent(item.positionMillis);
      });
    }, 1000);
  }
  React.useEffect(() => {
    return sound
      ? () => {
          // console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  function seekTime(value) {
    sound.setPositionAsync(value);
  }

  function tranlateText() {
    !translate ? setTranslate(true) : setTranslate(false);
  }

  return (
    <>
      <Container>
        <Header>
          <ButtonBack onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </ButtonBack>
          <TranslateButton onPress={() => tranlateText()}>
            <Text
              style={{
                textTransform: "uppercase",
                fontSize: 12,
                // fontWeight: "bold"
              }}
            >
              Traduzir
            </Text>
          </TranslateButton>
        </Header>
        <Scroll showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <View style={{width:'35%'}}>
              <BookCover></BookCover>
            </View>
            <View style={{width:'65%',paddingLeft:10}}>
              <Title>{bookInfo.book.title}</Title>
              <Author>{bookInfo.book.author}</Author>
              <View style={{ flexDirection: "row", marginVertical: 10 }}>
                <Entypo name="star" size={20} color="#FA6400" />
                <Author>{bookInfo.book.stars}</Author>
              </View>
            </View>
          </View>

          <PlayerContainer>
            <TouchableOpacity
              onPress={() => playSound()}
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRightWidth: 1,
                borderRightColor: "#ccc"
              }}
            >
              <FontAwesome name={playIcon} size={18} color="black" />
            </TouchableOpacity>

            <View
              style={{
                width: 40,
                // borderWidth: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TextTime>
                {current === undefined
                  ? "00:00"
                  : secondsToMinutes(current * 0.001)}
              </TextTime>
            </View>

            <Slider
              style={{ width: "55%", height: 40 }}
              minimumValue={0}
              maximumValue={duration}
              step={1}
              value={current}
              minimumTrackTintColor="#FA6400"
              maximumTrackTintColor="#000000"
              thumbTintColor="#FA6400"
              onValueChange={(value) => seekTime(value)}
            />
            <View
              style={{
                width: 40,
                // borderWidth: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TextTime>
                {duration === undefined
                  ? "00:00"
                  : secondsToMinutes(duration * 0.001)}
              </TextTime>
            </View>
          </PlayerContainer>

          {!translate ? (
            <TextBooks>{bookInfo.book.text}</TextBooks>
          ) : (
            <TextBooks>{bookInfo.book.translate}</TextBooks>
          )}
        </Scroll>
      </Container>
      <ButtonQuizArea>
        <ButtonQuiz>
          <Text style={{color:'#fff'}}>Did you understand the text?</Text>
        </ButtonQuiz>
      </ButtonQuizArea>
    </>
  );
};

export default Book;
