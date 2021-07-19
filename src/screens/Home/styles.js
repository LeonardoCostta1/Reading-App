import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  paddingHorizontal: 30px;
`;
export const Scroll = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    width: "100%"
  }
}))``;

export const TopContainer = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  marginVertical: 20px;
`;

export const InfoContainer = styled.View`
  background-color: #fff;
  height: 80px;
  width: 100%;
  align-self: center;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  /* elevation:10px */
`;

export const TimeStudy = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
export const ContainerCategory = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

export const Category = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
export const SeeAll = styled.Text`
  color: #FA6400;
`;
export const ContainerBooks = styled.View``;

export const BoxBooks = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  padding-bottom: 10px;
`;

export const Book = styled.View`
  height: 90px;
  width: 70px;
  background-color: #FA6400;
  margin-right: 20px;
`;

export const BookDescriptionContainer = styled.View`
  height: 50px;
`;
export const TitleBook = styled.Text`
  text-transform: capitalize;
  font-weight: bold;
`;

export const Author = styled.Text``;

export const StarContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const StarRate = styled.Text`
  font-weight: bold;
`;
