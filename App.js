
import React from "react";
import { BookProvider } from "./src/Provider";
import Routes from "./src/Routes";
import { StatusBar } from "react-native";


export default function App() {
  return (
    <>
      <BookProvider>
        <Routes />
        <StatusBar/>
      </BookProvider>
    </>
  );
}
