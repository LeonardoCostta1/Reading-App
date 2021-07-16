import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 30px;
`;

export const Header = styled.View`
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const Scroll = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: "center",
    paddingBottom:50,
  }
}))``;

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
`;
export const BookCover = styled.View`
  height: 160px;
  width: 120px;
  background-color: #ffdf10;
  margin-bottom: 20px;
`;
export const PlayerContainer = styled.View`
  height: 50px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background: #fff;
  align-self: center;
  border-top-width: 1px;
  border-top-color: #ddd;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 20px;
`;
