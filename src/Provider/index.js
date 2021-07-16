  
import React, { createContext, useState } from "react";

const BookContext = createContext({});

export const BookProvider = ({ children }) => {
  const [book, setBook] = useState({
    title: "",
    text: "",
  });

  return (
    <BookContext.Provider value={{ book, setBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;