import { StatusBar } from "expo-status-bar";
import React from "react";
import { BookProvider } from "./src/Provider";
import Routes from "./src/Routes";



export default function App() {
  return (
    <>
      <BookProvider>
        <Routes />
        <StatusBar style="auto" />
      </BookProvider>
    </>
  );
}
